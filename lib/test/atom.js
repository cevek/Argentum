describe("atom", function () {
	Atom.debugMode = true;
	var a1 = new Atom(null, {name: 'a1', value: 0});
	var a2 = new Atom(null, {name: 'a2', getter: function(){return a1.get() + 1}});
	var a3 = new Atom(null, {name: 'a3', getter: function(){return a2.get() + 1}});
	var a4 = new Atom(null, {name: 'a4', getter: function(){return a1.get() + 10}});
	var a5 = new Atom(null, {name: 'a5', getter: function(){return a4.get() + a3.get() + a6.get()}});

	var a6 = new Atom(null, {name: 'a6', getter: function(){return a7.get() + 22}});
	var a7 = new Atom(null, {name: 'a7', getter: function(){return a8.get() + a4.get()}});
	var a8 = new Atom(null, {name: 'a8', getter: function(){return a1.get() + 100}});
	a5.get();
	a1.set(1);

	it("calc order", function () {
		expect(a5.get()).toBe(148);
	})

	it("levels", function () {
		expect(a1.level).toBe(4);
		expect(a2.level).toBe(2);
		expect(a3.level).toBe(1);
		expect(a5.level).toBe(0);
		expect(a6.level).toBe(1);
		expect(a7.level).toBe(2);
		expect(a4.level).toBe(3);
		expect(a8.level).toBe(3);
	})

	it("toJSON() valueOf()", function () {
		expect(a1.toJSON()).toBe("<Atom>");
		expect(a1.valueOf()).toBe(a1.value);
	})

	it("cyclic", function () {
		try {
			var t1 = new Atom(null, {value: 1});
			var t2 = new Atom(null, {
				getter: function () {
					return t1.get() + t3.get()
				}
			});
			var t3 = new Atom(null, {
				getter: function () {
					return t2.get()
				}
			});
			t2.get();
			expect(true).toBe(false);
		}
		catch (e){
			expect(true).toBe(true);
		}
	})

	it("isNull", function () {
		var a = new Atom(null, {value: 123});
		a1.setNull()
		expect(a1.get()).toBe(null);
	})

	it("isEqual", function () {
		var a = new Atom(null, {value: 123});
		expect(a.isEqual(123)).toBe(true);
		expect(a.isEqual("123")).toBe(false);
		a.set(456);
		expect(a.isEqual(456)).toBe(true);
	});

	it("isEmpty", function () {
		var a = new Atom(null, {value: 123});
		expect(a.isEmpty()).toBe(false);

		a.set(void 0);
		expect(a.isEmpty()).toBe(true);

		a.set(null);
		expect(a.isEmpty()).toBe(true);

		a.set(0);
		expect(a.isEmpty()).toBe(false);

		a.set([]);
		expect(a.isEmpty()).toBe(false);

		a.set(false);
		expect(a.isEmpty()).toBe(false);

		a.set(Number.NaN);
		expect(a.isEmpty()).toBe(false);

		a.set(1/0);
		expect(a.isEmpty()).toBe(false);

	});

	it("debug", function () {
		Atom.debugMode = true;
		var t1 = new Atom(null, {value: {id: 123}});
		var t2 = new Atom(null, {getter: function(){return t1.get()}});
		expect(true).toBe(true);
	})
});
