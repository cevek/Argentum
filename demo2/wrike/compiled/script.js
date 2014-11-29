var wrike;
(function (wrike) {
    var Task = (function () {
        function Task() {
        }
        return Task;
    })();
    wrike.Task = Task;
})(wrike || (wrike = {}));
var wrike;
(function (wrike) {
    var User = (function () {
        function User() {
        }
        return User;
    })();
    wrike.User = User;
})(wrike || (wrike = {}));
var wrike;
(function (wrike) {
    (function (nc) {
        var NCItem = (function () {
            function NCItem() {
            }
            return NCItem;
        })();
        nc.NCItem = NCItem;
    })(wrike.nc || (wrike.nc = {}));
    var nc = wrike.nc;
})(wrike || (wrike = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var wrike;
(function (wrike) {
    (function (nc) {
        var Assigment = (function (_super) {
            __extends(Assigment, _super);
            function Assigment() {
                _super.apply(this, arguments);
            }
            return Assigment;
        })(nc.NCItem);
        nc.Assigment = Assigment;
    })(wrike.nc || (wrike.nc = {}));
    var nc = wrike.nc;
})(wrike || (wrike = {}));
var wrike;
(function (wrike) {
    (function (nc) {
        var Marketing = (function (_super) {
            __extends(Marketing, _super);
            function Marketing() {
                _super.apply(this, arguments);
            }
            return Marketing;
        })(nc.NCItem);
        nc.Marketing = Marketing;
    })(wrike.nc || (wrike.nc = {}));
    var nc = wrike.nc;
})(wrike || (wrike = {}));
var wrike;
(function (wrike) {
    (function (nc) {
        var Inbox = (function () {
            function Inbox() {
            }
            return Inbox;
        })();
        nc.Inbox = Inbox;
    })(wrike.nc || (wrike.nc = {}));
    var nc = wrike.nc;
})(wrike || (wrike = {}));
var wrike;
(function (wrike) {
    (function (nc) {
        var Mention = (function (_super) {
            __extends(Mention, _super);
            function Mention() {
                _super.apply(this, arguments);
            }
            return Mention;
        })(nc.NCItem);
        nc.Mention = Mention;
    })(wrike.nc || (wrike.nc = {}));
    var nc = wrike.nc;
})(wrike || (wrike = {}));
var wrike;
(function (wrike) {
    (function (nc) {
        var InboxView = (function () {
            function InboxView() {
            }
            return InboxView;
        })();
        nc.InboxView = InboxView;
    })(wrike.nc || (wrike.nc = {}));
    var nc = wrike.nc;
})(wrike || (wrike = {}));
var wrike;
(function (wrike) {
    (function (nc) {
        var MentionsView = (function () {
            function MentionsView() {
            }
            return MentionsView;
        })();
        nc.MentionsView = MentionsView;
    })(wrike.nc || (wrike.nc = {}));
    var nc = wrike.nc;
})(wrike || (wrike = {}));
var wrike;
(function (wrike) {
    (function (nc) {
        (function (NCTabs) {
            NCTabs[NCTabs["Marketing"] = 0] = "Marketing";
            NCTabs[NCTabs["Inbox"] = 1] = "Inbox";
        })(nc.NCTabs || (nc.NCTabs = {}));
        var NCTabs = nc.NCTabs;
        var NCView = (function () {
            function NCView() {
            }
            return NCView;
        })();
        nc.NCView = NCView;
    })(wrike.nc || (wrike.nc = {}));
    var nc = wrike.nc;
})(wrike || (wrike = {}));
var wrike;
(function (wrike) {
    (function (nc) {
        function NCViewTemplate(vm) {
            return Arg.div();
        }
    })(wrike.nc || (wrike.nc = {}));
    var nc = wrike.nc;
})(wrike || (wrike = {}));
//# sourceMappingURL=script.js.map