var data = [{
    "id": "JT-26499",
    "entityId": "25-748017",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26499"
    }, {
        "name": "summary",
        "value": "\"Add widget\" button should be white and move in the right corner in header"
    }, {"name": "created", "value": "1411027542151"}, {
        "name": "updated",
        "value": "1411028975844"
    }, {"name": "updaterName", "value": "xi-eye"}, {
        "name": "updaterFullName",
        "value": "Alexander Anisimov"
    }, {"name": "reporterName", "value": "artemtiunov"}, {
        "name": "reporterFullName",
        "value": "Artem Tiunov"
    }, {"name": "commentsCount", "value": "1"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Usability Problem"], "valueId": ["Usability Problem"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Alexander Anisimov", "value": "xi-eye"}]}, {
        "name": "Subsystem",
        "value": ["Dashboard"],
        "valueId": [],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "attachments",
        "value": [{
            "id": "74-186464",
            "url": "https://youtrack.jetbrains.com/_persistent/image.png?file=74-186464&v=0&c=true",
            "value": "image.png"
        }]
    }],
    "comment": [{
        "id": "27-802321",
        "author": "xi-eye",
        "authorFullName": "Alexander Anisimov",
        "issueId": "JT-26499",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Do you mean here?",
        "shownForIssueAuthor": false,
        "created": 1411028975855,
        "updated": 1411028983206,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26487",
    "entityId": "25-747723",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26487"
    }, {"name": "summary", "value": "After using import project issue ID has now jumped"}, {
        "name": "description",
        "value": "What steps will reproduce the problem?\n1.Use rest import\n2.Specify project issue id as required as part of the XML request\n3. send http request\n\nWhat is the expected result?\n\nrecords appear in allocated area. Unique ID record creation still stays sequential based on current manually created tickets\n\nWhat happens instead?\n\nImported data with a high number range to separate imported values. Now all new tickets start with an ID after this range. So I expect a ticket to be something like MM-601, now after import it is MM-100000601 - it is becoming a user problem.\n\n"
    }, {"name": "created", "value": "1410965237935"}, {
        "name": "updated",
        "value": "1411028274541"
    }, {"name": "updaterName", "value": "Anna.Zhdan"}, {
        "name": "updaterFullName",
        "value": "Anna Zhdan"
    }, {"name": "resolved", "value": "1411028274524"}, {
        "name": "reporterName",
        "value": "corey.heinz"
    }, {"name": "reporterFullName", "value": "Corey Heinz"}, {"name": "commentsCount", "value": "1"}, {
        "name": "votes",
        "value": "0"
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["As designed"],
        "valueId": ["As designed"]
    }, {"name": "Assignee", "value": [{"fullName": "Anna Zhdan", "value": "Anna.Zhdan"}]}, {
        "name": "Subsystem",
        "value": ["REST API"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [{
        "id": "27-802305",
        "author": "Anna.Zhdan",
        "authorFullName": "Anna Zhdan",
        "issueId": "JT-26487",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Hello, Corey!\nUnfortunately, this in not a bug, in YouTrack every newly created issue gets number that is bigger then every previously created issue. So I can suggest you to import your issues to separate project.",
        "shownForIssueAuthor": false,
        "created": 1411028270307,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26419",
    "entityId": "25-745874",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26419"
    }, {"name": "summary", "value": "Report link in top menu notfound on port other than 80"}, {
        "name": "description",
        "value": "'''What steps will reproduce the problem?'''\n# install youtrack on port other than 80\n# click on report link in top menu\n# not found\n\n'''What is the expected result?'''\nmust view reports page\n\n'''What happens instead?'''\nlink not found\n\n''view attached screenshot''\n"
    }, {"name": "created", "value": "1410731495079"}, {
        "name": "updated",
        "value": "1411027685053"
    }, {"name": "updaterName", "value": "dll1024"}, {
        "name": "updaterFullName",
        "value": "Naser Mirzaei"
    }, {"name": "reporterName", "value": "dll1024"}, {
        "name": "reporterFullName",
        "value": "Naser Mirzaei"
    }, {"name": "commentsCount", "value": "4"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Mikhail Kapusta", "value": "Mikhail.Kapusta"}]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "OS",
        "value": ["Windows 8"],
        "valueId": ["Windows 8"]
    }, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-185803",
            "url": "https://youtrack.jetbrains.com/_persistent/yt-bug-001.png?file=74-185803&v=0&c=true",
            "value": "yt-bug-001.png"
        }, {
            "id": "74-186295",
            "url": "https://youtrack.jetbrains.com/_persistent/err.png?file=74-186295&v=0&c=true",
            "value": "err.png"
        }]
    }],
    "comment": [{
        "id": "27-800073",
        "author": "andrey.tigay",
        "authorFullName": "Andrey Tigay",
        "issueId": "JT-26419",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Hello,\n\nSo you've tried to click on Reports tab and with no avail, correct? Could you please provide me with the screenshot of 'Not found' page when click on Reports tab?\n\nThank you.\n\n",
        "shownForIssueAuthor": false,
        "created": 1410780580313,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-801719",
        "author": "dll1024",
        "authorFullName": "Naser Mirzaei",
        "issueId": "JT-26419",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "File attached to main post:\n!err.png!",
        "shownForIssueAuthor": false,
        "created": 1410954592986,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-802015",
        "author": "andrey.tigay",
        "authorFullName": "Andrey Tigay",
        "issueId": "JT-26419",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "@dll1024 Hi, thanks for details.\nWhat's set in Administration> Settings> BaseURL ?\n ",
        "shownForIssueAuthor": false,
        "created": 1410967953424,
        "updated": 1410780580262,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-802296",
        "author": "dll1024",
        "authorFullName": "Naser Mirzaei",
        "issueId": "JT-26419",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "i removed youtrack from localhost 2 hours ago",
        "shownForIssueAuthor": false,
        "created": 1411027685063,
        "updated": 1410954592938,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26275",
    "entityId": "25-739019",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26275"
    }, {
        "name": "summary",
        "value": "\"java.lang.IllegalStateException: Committed\" warning on /releaseNotes in stdout"
    }, {
        "name": "description",
        "value": "youtrack.jar build 11243\n\n*STR:*\n1. Get the backup that I use for performance tests (it was first mentioned in JT-25282).\n2. Start it with youtrack.jar (start params don't matter)\n3. Log in as root and go to /releaseNotes (you can add some search query if you wish, like /releaseNotes/JT?q=version%3A+4.2)\n\nThe page will load just fine with correct result, but now there would be a warning and an error in stdout:\n\n2014-09-01 22:14:28.512:WARN:oejs.ServletHandler:/releaseNotes/JT\njava.lang.IllegalStateException: Committed\n\tat org.eclipse.jetty.server.Response.resetBuffer(Response.java:1136)\n\tat javax.servlet.ServletResponseWrapper.resetBuffer(ServletResponseWrapper.java:230)\n\tat org.eclipse.jetty.http.gzip.CompressedResponseWrapper.resetBuffer(CompressedResponseWrapper.java:233)\n\tat org.eclipse.jetty.http.gzip.CompressedResponseWrapper.sendRedirect(CompressedResponseWrapper.java:269)\n\tat jetbrains.mps.webr.runtime.requestProcessor.ResponseFactory$5.doAction(ResponseFactory.java:230)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.executeResponseAction(MainServlet.java:206)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:149)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:734)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:847)\n\tat org.eclipse.jetty.servlet.ServletHolder.handle(ServletHolder.java:648)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1336)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:453)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:137)\n\tat org.eclipse.jetty.security.SecurityHandler.handle(SecurityHandler.java:559)\n\tat org.eclipse.jetty.server.session.SessionHandler.doHandle(SessionHandler.java:231)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1072)\n\tat org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:382)\n\tat org.eclipse.jetty.server.session.SessionHandler.doScope(SessionHandler.java:193)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1006)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:135)\n\tat org.eclipse.jetty.server.handler.ContextHandlerCollection.handle(ContextHandlerCollection.java:255)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:116)\n\tat org.eclipse.jetty.server.Server.handle(Server.java:365)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.handleRequest(AbstractHttpConnection.java:485)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.headerComplete(AbstractHttpConnection.java:926)\n\tat org.eclipse.jetty.server.AbstractHttpConnection$RequestHandler.headerComplete(AbstractHttpConnection.java:988)\n\tat org.eclipse.jetty.http.HttpParser.parseNext(HttpParser.java:635)\n\tat org.eclipse.jetty.http.HttpParser.parseAvailable(HttpParser.java:235)\n\tat org.eclipse.jetty.server.AsyncHttpConnection.handle(AsyncHttpConnection.java:82)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint.handle(SelectChannelEndPoint.java:627)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint$1.run(SelectChannelEndPoint.java:51)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:608)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool$3.run(QueuedThreadPool.java:543)\n\tat java.lang.Thread.run(Thread.java:744)\n\n22:14:28,512 ERROR [MainServlet                   ] [tp729770861-154] [root@172.20.240.82] java.lang.RuntimeException: Error while closing output stream\njava.lang.RuntimeException: Error while closing output stream\n\tat webr.framework.textBuilder.StreamBuilderContext.end(StreamBuilderContext.java:115)\n\tat jetbrains.mps.webr.runtime.requestProcessor.ResponseFactory$2.doAction(ResponseFactory.java:85)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.executeResponseAction(MainServlet.java:198)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:149)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:734)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:847)\n\tat org.eclipse.jetty.servlet.ServletHolder.handle(ServletHolder.java:648)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1336)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:453)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:137)\n\tat org.eclipse.jetty.security.SecurityHandler.handle(SecurityHandler.java:559)\n\tat org.eclipse.jetty.server.session.SessionHandler.doHandle(SessionHandler.java:231)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1072)\n\tat org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:382)\n\tat org.eclipse.jetty.server.session.SessionHandler.doScope(SessionHandler.java:193)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1006)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:135)\n\tat org.eclipse.jetty.server.handler.ContextHandlerCollection.handle(ContextHandlerCollection.java:255)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:116)\n\tat org.eclipse.jetty.server.Server.handle(Server.java:365)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.handleRequest(AbstractHttpConnection.java:485)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.headerComplete(AbstractHttpConnection.java:926)\n\tat org.eclipse.jetty.server.AbstractHttpConnection$RequestHandler.headerComplete(AbstractHttpConnection.java:988)\n\tat org.eclipse.jetty.http.HttpParser.parseNext(HttpParser.java:635)\n\tat org.eclipse.jetty.http.HttpParser.parseAvailable(HttpParser.java:235)\n\tat org.eclipse.jetty.server.AsyncHttpConnection.handle(AsyncHttpConnection.java:82)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint.handle(SelectChannelEndPoint.java:627)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint$1.run(SelectChannelEndPoint.java:51)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:608)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool$3.run(QueuedThreadPool.java:543)\n\tat java.lang.Thread.run(Thread.java:744)\n"
    }, {"name": "created", "value": "1409595752558"}, {
        "name": "updated",
        "value": "1411027475933"
    }, {"name": "updaterName", "value": "jetbrains.teamcity"}, {
        "name": "updaterFullName",
        "value": "JetBrains TeamCity"
    }, {"name": "resolved", "value": "1411023560878"}, {
        "name": "reporterName",
        "value": "rekolobov"
    }, {"name": "reporterFullName", "value": "Roman Kolobov"}, {
        "name": "commentsCount",
        "value": "2"
    }, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Fixed"],
        "valueId": ["Fixed"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Evgeny Naumenko", "value": "Evgeny_Naumenko"}]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Harmonicity IX"],
        "valueId": []
    }, {"name": "Fixed in builds", "value": ["11504"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [{
        "id": "27-792762",
        "author": "rekolobov",
        "authorFullName": "Roman Kolobov",
        "issueId": "JT-26275",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Might be slightly interesting w/ regards to JT-21908.\nAlso, JT-6584 might be vaguely related.",
        "shownForIssueAuthor": false,
        "created": 1409595812800,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-801623",
        "author": "Evgeny_Naumenko",
        "authorFullName": "Evgeny Naumenko",
        "issueId": "JT-26275",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "UnchekedPrintWriter does not follow parent's implementation principles: close() does not nullify delegate stream reference, while checkError() still delegates to parent. Thus, any attempt to call checkError() after close() on UPW is doomed to fail this way",
        "shownForIssueAuthor": false,
        "created": 1410949817912,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-17542",
    "entityId": "25-488767",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "17542"
    }, {"name": "summary", "value": "Can't see on the agile board if a task has comments"}, {
        "name": "description",
        "value": "Can't see on the agile board if a task has comments. \nIt will be nice that if a task has comments too show a icon or something."
    }, {"name": "created", "value": "1353333105928"}, {
        "name": "updated",
        "value": "1411027294272"
    }, {"name": "updaterName", "value": "artemtiunov"}, {
        "name": "updaterFullName",
        "value": "Artem Tiunov"
    }, {"name": "resolved", "value": "1411027294254"}, {
        "name": "reporterName",
        "value": "Marco.van.Ree"
    }, {"name": "reporterFullName", "value": "Marco van Ree"}, {
        "name": "commentsCount",
        "value": "2"
    }, {"name": "votes", "value": "2"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "is duplicated by", "value": "JT-18992"}]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Usability Problem"], "valueId": ["Usability Problem"]}, {
        "name": "State",
        "value": ["Invalid"],
        "valueId": ["Invalid"]
    }, {"name": "Assignee", "value": [{"fullName": "Artem Tiunov", "value": "artemtiunov"}]}, {
        "name": "Subsystem",
        "value": ["Agile Board"],
        "valueId": [],
        "color": {"bg": "#d9ffc8", "fg": "#000"}
    }, {"name": "Fix versions", "value": ["Backlog"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [{
        "id": "27-561662",
        "author": "tjmkruger",
        "authorFullName": "Terence Kruger",
        "issueId": "JT-17542",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "This would be of great value. \n\nScenario:\nAt the moment I am using the board as a kanban board and mark the task as blocked if it is waiting for a response or another task etc.\nWhen glancing at the board it would be nice to know why a task is blocked. \nWhen I mark a task as blocked, normally the last comment on the task gives the information as to why.\nIf I could hover over a message icon on the task to see the last comment it would help alot.",
        "shownForIssueAuthor": false,
        "created": 1375448844608,
        "updated": 1375448892130,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-802290",
        "author": "artemtiunov",
        "authorFullName": "Artem Tiunov",
        "issueId": "JT-17542",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "I don't think it's so important information to show it on the Agile Board",
        "shownForIssueAuthor": false,
        "created": 1411027279165,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26498",
    "entityId": "25-748012",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26498"
    }, {
        "name": "summary",
        "value": "REST exception for URL: /hub/api/rest/cas/login on logout from dashboard"
    }, {
        "name": "description",
        "value": "youtrack-hub.jar, build 11492\n\nDuring my performance tests, some of the test's logouts from dashboard result in failure (HTTP 500) and the following exception in error logs:\n\n18 Sep 2014 00:46:45,273 ERROR [faultExceptionMapper] [qtp990262424-148                                  ] [] Exception while processing rest request\njava.lang.ArrayIndexOutOfBoundsException: -2147483648\n\tat java.text.SimpleDateFormat.subFormat(SimpleDateFormat.java:1169)\n\tat java.text.SimpleDateFormat.format(SimpleDateFormat.java:978)\n\tat java.text.SimpleDateFormat.format(SimpleDateFormat.java:948)\n\tat java.text.DateFormat.format(DateFormat.java:336)\n\tat jetbrains.jetpass.cas.server.NewCookieExt.toString(NewCookieExt.java:39)\n\tat jetbrains.jetpass.cas.server.TicketGrantingTicketUtil.cookie(TicketGrantingTicketUtil.java:107)\n\tat jetbrains.jetpass.cas.server.TicketGrantingTicketUtil.removeTicketGrantingTicketCookie(TicketGrantingTicketUtil.java:84)\n\tat jetbrains.jetpass.cas.server.CasResource.get_Login(CasResource.java:134)\n\tat sun.reflect.GeneratedMethodAccessor244.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:606)\n\tat com.sun.jersey.spi.container.JavaMethodInvokerFactory$1.invoke(JavaMethodInvokerFactory.java:60)\n\tat com.sun.jersey.server.impl.model.method.dispatch.AbstractResourceMethodDispatchProvider$ResponseOutInvoker._dispatch(AbstractResourceMethodDispatchProvider.java:205)\n\tat com.sun.jersey.server.impl.model.method.dispatch.ResourceJavaMethodDispatcher.dispatch(ResourceJavaMethodDispatcher.java:75)\n\tat com.sun.jersey.server.impl.uri.rules.HttpMethodRule.accept(HttpMethodRule.java:288)\n\tat com.sun.jersey.server.impl.uri.rules.RightHandPathRule.accept(RightHandPathRule.java:147)\n\tat com.sun.jersey.server.impl.uri.rules.ResourceObjectRule.accept(ResourceObjectRule.java:100)\n\tat com.sun.jersey.server.impl.uri.rules.RightHandPathRule.accept(RightHandPathRule.java:147)\n\tat com.sun.jersey.server.impl.uri.rules.RootResourceClassesRule.accept(RootResourceClassesRule.java:84)\n\tat com.sun.jersey.server.impl.application.WebApplicationImpl._handleRequest(WebApplicationImpl.java:1483)\n\tat com.sun.jersey.server.impl.application.WebApplicationImpl._handleRequest(WebApplicationImpl.java:1414)\n\tat com.sun.jersey.server.impl.application.WebApplicationImpl.handleRequest(WebApplicationImpl.java:1363)\n\tat com.sun.jersey.server.impl.application.WebApplicationImpl.handleRequest(WebApplicationImpl.java:1353)\n\tat com.sun.jersey.spi.container.servlet.WebComponent.service(WebComponent.java:414)\n\tat jetbrains.mps.webr.rpc.rest.provider.misc.DefaultRestRequestHandler.handle(DefaultRestRequestHandler.java:181)\n\tat jetbrains.mps.webr.runtime.requestProcessor.RestRequestProcessor.processRequest(RestRequestProcessor.java:47)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.processRequest(MainServlet.java:252)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:138)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:734)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:847)\n\tat org.eclipse.jetty.servlet.ServletHolder.handle(ServletHolder.java:648)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1336)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.handleRewrite(RuleChain.java:176)\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.doRules(RuleChain.java:145)\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriter.processRequest(UrlRewriter.java:92)\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriteFilter.doFilter(UrlRewriteFilter.java:394)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat jetbrains.jetpass.server.performance.PerformanceFilter$1.invoke(PerformanceFilter.java:24)\n\tat jetbrains.jetpass.server.performance.PerformanceMonitor.request(PerformanceMonitor.java:72)\n\tat jetbrains.jetpass.server.performance.PerformanceFilter.doFilter(PerformanceFilter.java:22)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:453)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:137)\n\tat org.eclipse.jetty.security.SecurityHandler.handle(SecurityHandler.java:559)\n\tat org.eclipse.jetty.server.session.SessionHandler.doHandle(SessionHandler.java:231)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1072)\n\tat org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:382)\n\tat org.eclipse.jetty.server.session.SessionHandler.doScope(SessionHandler.java:193)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1006)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:135)\n\tat org.eclipse.jetty.server.handler.ContextHandlerCollection.handle(ContextHandlerCollection.java:255)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:116)\n\tat org.eclipse.jetty.server.Server.handle(Server.java:365)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.handleRequest(AbstractHttpConnection.java:485)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.headerComplete(AbstractHttpConnection.java:926)\n\tat org.eclipse.jetty.server.AbstractHttpConnection$RequestHandler.headerComplete(AbstractHttpConnection.java:988)\n\tat org.eclipse.jetty.http.HttpParser.parseNext(HttpParser.java:635)\n\tat org.eclipse.jetty.http.HttpParser.parseAvailable(HttpParser.java:235)\n\tat org.eclipse.jetty.server.AsyncHttpConnection.handle(AsyncHttpConnection.java:82)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint.handle(SelectChannelEndPoint.java:627)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint$1.run(SelectChannelEndPoint.java:51)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:608)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool$3.run(QueuedThreadPool.java:543)\n\tat java.lang.Thread.run(Thread.java:744)\n\nI didn't notice any pattern in when and for which users this exception is raised."
    }, {"name": "created", "value": "1411027019983"}, {
        "name": "updated",
        "value": "1411027019983"
    }, {"name": "updaterName", "value": "rekolobov"}, {
        "name": "updaterFullName",
        "value": "Roman Kolobov"
    }, {"name": "reporterName", "value": "rekolobov"}, {
        "name": "reporterFullName",
        "value": "Roman Kolobov"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Evgeny Naumenko", "value": "Evgeny_Naumenko"}]
    }, {
        "name": "Subsystem",
        "value": ["HUB & Ring"],
        "valueId": [],
        "color": {"bg": "#ccffff", "fg": "#000"}
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-24255",
    "entityId": "25-683330",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "24255"
    }, {"name": "summary", "value": "Edit Existing Work Item doesn't always update"}, {
        "name": "description",
        "value": "What steps will reproduce the problem?\n\nPerform update of workitem using rest request (PUT to url with xml body), following instructions from:\nhttp://confluence.jetbrains.com/display/YTD5/Edit+Existing+Work+Item\n\nI would expect the work item to be updated with the new values.\n\nInstead, the server responds with 200/ok, with no content, seemingly indicating ok, but the work item is not updated.\nIn other cases (no content sent, missing workitem, not authenticated) I do get proper messages.\n\nFiddler capture that does NOT work, sent from my application. \n{code}\nPUT http://wsrobert.hq.local:8888/rest/issue/T-1/timetracking/workitem/85-400 HTTP/1.1\nAccept: application/json, application/xml, text/json, text/x-json, text/javascript, text/xml\nUser-Agent: RestSharp/104.4.0.0\nContent-Type: text/xml\nHost: wsrobert.hq.local:8888\nCookie: JSESSIONID=6A5E4C2046B3520F7B797F16A0D2C572; jetbrains.charisma.main.security.PRINCIPAL=YTY1OGFiMGQ3NThjYTE2NGNkYjgwYzU3YTlmYzdjNDE4MDBjNjVlMTAzZTc5MDJjOGI5NDg4ZjAzZGZlYTQ5MDpyb290\nContent-Length: 54\nAccept-Encoding: gzip, deflate\n\n<workItem>\n  <duration>660.00</duration>\n</workItem>\n{code}\n\nFiddler capture of request made by chome extension, this DOES work.\n{code}\nPUT http://wsrobert.hq.local:8888/rest/issue/T-1/timetracking/workitem/85-400 HTTP/1.1\nHost: wsrobert.hq.local:8888\nConnection: keep-alive\nContent-Length: 45\nAccept: application/json, application/xml, text/json, text/x-json, text/javascript, text/xml\nOrigin: chrome-extension://cokgbflfommojglbmbpenpphppikmonn\nUser-Agent: Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36\nContent-Type: text/xml\nDNT: 1\nAccept-Encoding: gzip,deflate,sdch\nAccept-Language: en-US,en;q=0.8,nl;q=0.6,de;q=0.4\nCookie: JSESSIONID=42A0499A28B841C7C8E0A738044FBFFC; jetbrains.charisma.main.security.PRINCIPAL=YTY1OGFiMGQ3NThjYTE2NGNkYjgwYzU3YTlmYzdjNDE4MDBjNjVlMTAzZTc5MDJjOGI5NDg4ZjAzZGZlYTQ5MDpyb290\n\n<workItem>\n<duration>761</duration>\n</workItem>\n{code}\n\nWhen I request from my aqpplication using Json, the request DOES work:\n\n{code}\nPUT http://wsrobert.hq.local:8888/rest/issue/T-1/timetracking/workitem/85-400 HTTP/1.1\nAccept: application/json, application/xml, text/json, text/x-json, text/javascript, text/xml\nUser-Agent: RestSharp/104.4.0.0\nContent-Type: application/json\nHost: wsrobert.hq.local:8888\nCookie: JSESSIONID=E7C458348408FE1C6A541B08A2EF9756; jetbrains.charisma.main.security.PRINCIPAL=YTY1OGFiMGQ3NThjYTE2NGNkYjgwYzU3YTlmYzdjNDE4MDBjNjVlMTAzZTc5MDJjOGI5NDg4ZjAzZGZlYTQ5MDpyb290\nContent-Length: 19\nAccept-Encoding: gzip, deflate\n\n{\"duration\":720.00}\n{code}\n\nI have a unit test to demonstrate this behaviour, so I can assist in finding the issue."
    }, {"name": "created", "value": "1396019598068"}, {
        "name": "updated",
        "value": "1411026734445"
    }, {"name": "updaterName", "value": "Anna.Zhdan"}, {
        "name": "updaterFullName",
        "value": "Anna Zhdan"
    }, {"name": "resolved", "value": "1411026734417"}, {
        "name": "reporterName",
        "value": "Robert_Sirre"
    }, {"name": "reporterFullName", "value": "Robert Sirre"}, {"name": "commentsCount", "value": "1"}, {
        "name": "votes",
        "value": "0"
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["As designed"],
        "valueId": ["As designed"]
    }, {"name": "Assignee", "value": [{"fullName": "Anna Zhdan", "value": "Anna.Zhdan"}]}, {
        "name": "Subsystem",
        "value": ["REST API"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["6.1"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [{
        "id": "27-711983",
        "author": "Anna.Zhdan",
        "authorFullName": "Anna Zhdan",
        "issueId": "JT-24255",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Hello, Robert!\nThank you very much for such detailed request! I think problem with your first request is that you are using float number (660.00). This doesn't work for me too, but if you'll rewrite it like  \n{code}\n<workItem>\n  <duration>660</duration>\n</workItem>\n{code}\nit should be ok.",
        "shownForIssueAuthor": false,
        "created": 1396523048927,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-24170",
    "entityId": "25-680256",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "24170"
    }, {"name": "summary", "value": "YouTrack Rest API 5.1.1 Json response changed"}, {
        "name": "description",
        "value": "The response of sub-item collections changed, at least this affects calls using Json result to obtain accessible projects:\nhttp://confluence.jetbrains.com/display/YTD5/Get+Accessible+Projects#\n\nFor more details, see:\nhttp://forum.jetbrains.com/thread/YouTrack-1490"
    }, {"name": "created", "value": "1395399790419"}, {
        "name": "updated",
        "value": "1411026717318"
    }, {"name": "updaterName", "value": "Anna.Zhdan"}, {
        "name": "updaterFullName",
        "value": "Anna Zhdan"
    }, {"name": "reporterName", "value": "Robert_Sirre"}, {
        "name": "reporterFullName",
        "value": "Robert Sirre"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Anna Zhdan", "value": "Anna.Zhdan"}]}, {
        "name": "Subsystem",
        "value": ["REST API"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["6.1"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-23868",
    "entityId": "25-670299",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "23868"
    }, {"name": "summary", "value": "Get all projects REST API returns archived projects"}, {
        "name": "description",
        "value": "Related to: http://confluence.jetbrains.com/display/YTD5/Get+Accessible+Projects\n\nIt looks like archived projects still show up in the list when queriying “project/all”, but when I request the agile boards for an archived project “rest/admin/project/<name>/agile” I get back a 403 response.  There doesn’t appear to be a way to tell from the APIs whether a project is archived, but I would have expected it to be filtered from the project/all response.  Normally when requesting agile boards for projects that don't have agile boards configured I get a 404.\n\nNot a regression because archiving is new functionality, but this also broke our tools built on top of youtrack as soon as I used the archive feature."
    }, {"name": "created", "value": "1393548356547"}, {
        "name": "updated",
        "value": "1411026704173"
    }, {"name": "updaterName", "value": "Anna.Zhdan"}, {
        "name": "updaterFullName",
        "value": "Anna Zhdan"
    }, {"name": "resolved", "value": "1411026697485"}, {
        "name": "reporterName",
        "value": "joecastro"
    }, {"name": "reporterFullName", "value": "Joe Castro"}, {"name": "commentsCount", "value": "0"}, {
        "name": "votes",
        "value": "0"
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Fixed"],
        "valueId": ["Fixed"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Anna Zhdan", "value": "Anna.Zhdan"}]}, {
        "name": "Subsystem",
        "value": ["REST API"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["6.0"], "valueId": []}, {
        "name": "Affected versions",
        "value": ["5.1"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26388",
    "entityId": "25-744321",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26388"
    }, {
        "name": "summary",
        "value": "GitHub integration doesn't apply commands from commit messages in Kotlin"
    }, {
        "name": "description",
        "value": "It worked for me for a long time and at some point recently stopped.\n\nFor example these commits had no effect on the corresponding issues:\n\nKT-5719: https://github.com/JetBrains/kotlin/commit/fec64b31dc9a12f68c378094b0caa60276ebe279\nKT-5591: https://github.com/JetBrains/kotlin/commit/70561cc5393848a551bd76108532d9ef9a446ddb\nKT-5580, KT-2410: https://github.com/JetBrains/kotlin/commit/b52f337f7f881fc70d5f2c52a3aa793fdd1bdc67"
    }, {"name": "created", "value": "1410435665015"}, {
        "name": "updated",
        "value": "1411026653582"
    }, {"name": "updaterName", "value": "Anna.Zhdan"}, {
        "name": "updaterFullName",
        "value": "Anna Zhdan"
    }, {"name": "resolved", "value": "1411026653544"}, {
        "name": "reporterName",
        "value": "udalov"
    }, {"name": "reporterFullName", "value": "Alexander Udalov"}, {
        "name": "commentsCount",
        "value": "11"
    }, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Major"],
        "valueId": ["Major"],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Can't Reproduce"],
        "valueId": ["Can't Reproduce"]
    }, {"name": "Assignee", "value": [{"fullName": "Anna Zhdan", "value": "Anna.Zhdan"}]}, {
        "name": "Subsystem",
        "value": ["Integrations"],
        "valueId": []
    }, {"name": "Affected versions", "value": ["5.0"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [{
        "id": "27-798837",
        "author": "udalov",
        "authorFullName": "Alexander Udalov",
        "issueId": "JT-26388",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "One more\nhttps://github.com/JetBrains/kotlin/commit/81004889ebed705201b7844da454dec2c913f0a4",
        "shownForIssueAuthor": false,
        "created": 1410447685413,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-799027",
        "author": "udalov",
        "authorFullName": "Alexander Udalov",
        "issueId": "JT-26388",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "I'm not the only one affected by this\nKT-5554: https://github.com/JetBrains/kotlin/commit/32f6d7feacbe9d0a088a415d6f22918402ec95f7\n\nPlease advise what we should do",
        "shownForIssueAuthor": false,
        "created": 1410503560692,
        "updated": 1410447685376,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-799070",
        "author": "udalov",
        "authorFullName": "Alexander Udalov",
        "issueId": "JT-26388",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "I've looked through history and discovered that this commit (pushed on '''September, 1''') was the last one where the integration successfully applied commands: https://github.com/JetBrains/kotlin/commit/9d366cb89629034a4d75f3a69c310f4a16789181\n\nAll commit message commands after that had no effect on YT issues.",
        "shownForIssueAuthor": false,
        "created": 1410508235093,
        "updated": 1410503560654,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-799078",
        "author": "Anna.Zhdan",
        "authorFullName": "Anna Zhdan",
        "issueId": "JT-26388",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "@udalov thank you very much for information, it's really helpful.\n",
        "shownForIssueAuthor": false,
        "created": 1410508884694,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-800340",
        "author": "udalov",
        "authorFullName": "Alexander Udalov",
        "issueId": "JT-26388",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "For some reason the command was applied successfully today from Andrey's commit (KT-5773): https://github.com/JetBrains/kotlin/commit/f1cf446e10c1a227c022375d91c109b81ec9b1a0\n\nCan't tell if the issue is fixed or the integration just works for Andrey though, because it's his first commit with a command message since September, 1.",
        "shownForIssueAuthor": false,
        "created": 1410794542020,
        "updated": 1410794553803,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-800779",
        "author": "Anna.Zhdan",
        "authorFullName": "Anna Zhdan",
        "issueId": "JT-26388",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "@udalov what email do you have in GitHub profile?",
        "shownForIssueAuthor": false,
        "created": 1410861109041,
        "updated": 1410508884647,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-800786",
        "author": "udalov",
        "authorFullName": "Alexander Udalov",
        "issueId": "JT-26388",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "I have three emails in GH and Alexander.Udalov@jetbrains.com is selected as the primary one. I also commit from that same email all the time",
        "shownForIssueAuthor": false,
        "created": 1410861631814,
        "updated": 1410794541980,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-800789",
        "author": "udalov",
        "authorFullName": "Alexander Udalov",
        "issueId": "JT-26388",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Checked my YT profile, it has the same email but lowercase (alexander.udalov@jetbrains.com). Can this cause such problems? :)",
        "shownForIssueAuthor": false,
        "created": 1410861801813,
        "updated": 1410861631725,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-802123",
        "author": "udalov",
        "authorFullName": "Alexander Udalov",
        "issueId": "JT-26388",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Worked for me today (KT-5159 and the [commit|https://github.com/JetBrains/kotlin/commit/483232a3e54a6187df9f996e9e5d808a9e5d3d88]), have you fixed something?",
        "shownForIssueAuthor": false,
        "created": 1410976260935,
        "updated": 1410861801764,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-802271",
        "author": "Anna.Zhdan",
        "authorFullName": "Anna Zhdan",
        "issueId": "JT-26388",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "@udalov no, I didn't, and I've also checked integration on my test project -- it worked. I suppose that could be issues, caused by SSO integration, which is now in development and there could be some changes, that fixed the issue. ",
        "shownForIssueAuthor": false,
        "created": 1411025432638,
        "updated": 1410861108997,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-802272",
        "author": "udalov",
        "authorFullName": "Alexander Udalov",
        "issueId": "JT-26388",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "OK, it worked for me again this morning and for other people recently, so I guess you can close the issue, will notify if it stops again. Thank you.",
        "shownForIssueAuthor": false,
        "created": 1411025806553,
        "updated": 1410976260886,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26298",
    "entityId": "25-740220",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26298"
    }, {"name": "summary", "value": "YouTrack 6.0 InCloud"}, {
        "name": "created",
        "value": "1409759612924"
    }, {"name": "updated", "value": "1411026526591"}, {
        "name": "updaterName",
        "value": "vgurov"
    }, {"name": "updaterFullName", "value": "Vadim Gurov"}, {
        "name": "reporterName",
        "value": "Leonid.Stryuk"
    }, {"name": "reporterFullName", "value": "Leonid Stryuk"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "parent for", "value": "JT-25787"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26182"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26299"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26300"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26301"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26302"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26303"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26366"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26497"}]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Feature"], "valueId": ["Feature"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Leonid Stryuk", "value": "Leonid.Stryuk"}]}, {
        "name": "Subsystem",
        "value": ["Hosted solution"],
        "valueId": [],
        "color": {"bg": "#7b35db", "fg": "white"}
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26497",
    "entityId": "25-748008",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26497"
    }, {
        "name": "summary",
        "value": "InCloud Hub must have JBA auth module with same settings as yt5 jba module had"
    }, {
        "name": "description",
        "value": "I mean it must allow login only for owner (not sure it it was so) and forbid new users registration via it"
    }, {"name": "created", "value": "1411026518804"}, {
        "name": "updated",
        "value": "1411026526581"
    }, {"name": "updaterName", "value": "vgurov"}, {
        "name": "updaterFullName",
        "value": "Vadim Gurov"
    }, {"name": "reporterName", "value": "vgurov"}, {
        "name": "reporterFullName",
        "value": "Vadim Gurov"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-26298"}]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Task"], "valueId": ["Task"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Harmonicity IX"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26332",
    "entityId": "25-741505",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26332"
    }, {
        "name": "summary",
        "value": "Can not change bar color in \"Advanced issues per project\" report"
    }, {"name": "description", "value": "also note shifted triangles"}, {
        "name": "created",
        "value": "1409923477745"
    }, {"name": "updated", "value": "1411025723419"}, {
        "name": "updaterName",
        "value": "pasha"
    }, {"name": "updaterFullName", "value": "Pavel Nikolaev"}, {
        "name": "reporterName",
        "value": "vgurov"
    }, {"name": "reporterFullName", "value": "Vadim Gurov"}, {"name": "commentsCount", "value": "2"}, {
        "name": "votes",
        "value": "0"
    }, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-22667"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["In Progress"],
        "valueId": ["In Progress"],
        "color": {"bg": "#00a1b4", "fg": "white"}
    }, {"name": "Assignee", "value": [{"fullName": "Pavel Nikolaev", "value": "pasha"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Fixed in builds",
        "value": ["11376"],
        "valueId": []
    }, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-184513",
            "url": "https://youtrack.jetbrains.com/_persistent/image.png?file=74-184513&v=0&c=true",
            "value": "image.png"
        }]
    }],
    "comment": [{
        "id": "27-796907",
        "author": "pasha",
        "authorFullName": "Pavel Nikolaev",
        "issueId": "JT-26332",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Disabled ability to click on color sample in modal window to avoid situation with two opened modal windows (settings and color picker). Now color picker can be reached only from edit page. ",
        "shownForIssueAuthor": false,
        "created": 1410251235485,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-801557",
        "author": "pavel.nikitin",
        "authorFullName": "Pavel Nikitin",
        "issueId": "JT-26332",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Still looks confusing (seems like \"Default settings\" colors can be edited).",
        "shownForIssueAuthor": false,
        "created": 1410946434512,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-25036",
    "entityId": "25-703395",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "25036"
    }, {
        "name": "summary",
        "value": "Resizing the description window to a certain size makes it impossible to submit issues"
    }, {
        "name": "description",
        "value": "What steps will reproduce the problem?\n1. Start creating an issue in youtrack\n2. Resize the description text field\n3. Scroll to submit the issue\n\nWhat is the expected result?\nYou can click on the submit button and you're not moved back up on the page.\n\nWhat happens instead?\nThe create issue and close buttons are shown, then disappear quickly as you're moved up the page. This is most likely related to the fact that the top bar switches from being in position: relative to being in position: top."
    }, {"name": "created", "value": "1401638585053"}, {
        "name": "updated",
        "value": "1411021847819"
    }, {"name": "updaterName", "value": "xi-eye"}, {
        "name": "updaterFullName",
        "value": "Alexander Anisimov"
    }, {"name": "resolved", "value": "1405922470165"}, {
        "name": "reporterName",
        "value": "Tom_R"
    }, {"name": "reporterFullName", "value": "Tom R"}, {"name": "commentsCount", "value": "4"}, {
        "name": "votes",
        "value": "4"
    }, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "is duplicated by", "value": "JT-25034"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-25314"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-25707"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-26493"
        }]
    }, {
        "name": "Priority",
        "value": ["Major"],
        "valueId": ["Major"],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Fixed"],
        "valueId": ["Fixed"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Alexander Anisimov", "value": "xi-eye"}]}, {
        "name": "Subsystem",
        "value": ["UI"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Harmony", "Harmonicity IX"], "valueId": []}, {
        "name": "Fixed in builds",
        "value": ["10645"],
        "valueId": []
    }, {"name": "Browser", "value": ["Chrome 35.x"], "valueId": ["Chrome 35.x"]}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-171545",
            "url": "https://youtrack.jetbrains.com/_persistent/JT-25036.mp4?file=74-171545&v=0&c=true",
            "value": "JT-25036.mp4"
        }]
    }],
    "comment": [{
        "id": "27-746666",
        "author": "xi-eye",
        "authorFullName": "Alexander Anisimov",
        "issueId": "JT-25036",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Tom, i don't get the problem. Could you please clarify or attach a screencast?",
        "shownForIssueAuthor": false,
        "created": 1401941530449,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-748062",
        "author": "Tom_R",
        "authorFullName": "Tom R",
        "issueId": "JT-25036",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "I've added a screencast, hopefully the issue is clear enough. Note that all I do during the screencast is scroll down using my scroll wheel and then using the scrollbar.\n\nThe div with id *id_l.I.ni.commandToolbar* has the class *toolbar-unpined* added/removed to it rapidly.",
        "shownForIssueAuthor": false,
        "created": 1402181895248,
        "updated": 1402182128592,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-749151",
        "author": "xi-eye",
        "authorFullName": "Alexander Anisimov",
        "issueId": "JT-25036",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Thank you. Now it's clear",
        "shownForIssueAuthor": false,
        "created": 1402409817021,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-771384",
        "author": "xi-eye",
        "authorFullName": "Alexander Anisimov",
        "issueId": "JT-25036",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "The toolbar now is scrolling with the page.",
        "shownForIssueAuthor": false,
        "created": 1406027756796,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26493",
    "entityId": "25-747881",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26493"
    }, {
        "name": "summary",
        "value": "Cant scroll down and edit all attributes until ticket is saved"
    }, {
        "name": "description",
        "value": "What steps will reproduce the problem?\n1. create a new issue\n2.New Issue screen will load with list of attributes on right\n3. \n\nWhat is the expected result?\nAll issue attributes and fields are available for edit.\n\nWhat happens instead?\n\nonly fields viewable on the screen can be edited. Once the issue is saved a sub-scroll inside the main scroll becomes available, but not until after initial save. This is a large usability problem. \n\nPlease provide any additional information below.\nAttach a screenshot if possible\n"
    }, {"name": "created", "value": "1410981610523"}, {
        "name": "updated",
        "value": "1411021847770"
    }, {"name": "updaterName", "value": "xi-eye"}, {
        "name": "updaterFullName",
        "value": "Alexander Anisimov"
    }, {"name": "resolved", "value": "1411021847790"}, {
        "name": "reporterName",
        "value": "corey.heinz"
    }, {"name": "reporterFullName", "value": "Corey Heinz"}, {"name": "commentsCount", "value": "0"}, {
        "name": "votes",
        "value": "0"
    }, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "duplicates", "value": "JT-25036"}]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Duplicate"],
        "valueId": ["Duplicate"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-186415",
            "url": "https://youtrack.jetbrains.com/_persistent/IMG_17092014_151442.png?file=74-186415&v=0&c=true",
            "value": "IMG_17092014_151442.png"
        }]
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26486",
    "entityId": "25-747720",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26486"
    }, {"name": "summary", "value": "Comments appearing out of order"}, {
        "name": "description",
        "value": "What steps will reproduce the problem?\n1.Update a ticket and place a comment\n\n\nWhat is the expected result?\n\ncomment appears on the bottom of the comment chain\n\nWhat happens instead?\n\ncomments appear out of order and sometimes at the top instead of the bottom\n\nPlease provide any additional information below.\nAttach a screenshot if possible\n\nhttps://maxymiser.myjetbrains.com/youtrack/issue/MM-633#tab=Comments \n\n"
    }, {"name": "created", "value": "1410964948074"}, {
        "name": "updated",
        "value": "1411021372924"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "reporterName", "value": "corey.heinz"}, {
        "name": "reporterFullName",
        "value": "Corey Heinz"
    }, {"name": "commentsCount", "value": "2"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Ekaterina Zaikina", "value": "Ekaterina.Zaikina"}]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [{
        "id": "27-802132",
        "author": "Ekaterina.Zaikina",
        "authorFullName": "Ekaterina Zaikina",
        "issueId": "JT-26486",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "@Corey.Heinz, how did you add comment (via REST API or via user web-interface)?",
        "shownForIssueAuthor": false,
        "created": 1410978248074,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-802137",
        "author": "corey.heinz",
        "authorFullName": "Corey Heinz",
        "issueId": "JT-26486",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "web interface",
        "shownForIssueAuthor": false,
        "created": 1410978798830,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-22602",
    "entityId": "25-631176",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "22602"
    }, {"name": "summary", "value": "Duty 3.0"}, {
        "name": "description",
        "value": "Query for responsible person:\n[query:#jt #submitted #open #{Wait for Reply} #unassigned created: {Last month}, {This month} sort by: {issue id} -Feature -Task]\n\nActive = {\nalexander.buturlinov\nAlexander.Volfman\nandrey.tigay\nAnna.Zhdan\nEkaterina.Zaikina\nhoegaarden\nLeonid.Stryuk\nmariyafomkina\nMikhail.Kapusta\npasha\npavel.nikitin\nsmandreev\nvgurov\nxi-eye\n}\n\nOn a rest = {\ndima\ni.kate\n}"
    }, {"name": "created", "value": "1384350284618"}, {
        "name": "updated",
        "value": "1411020000561"
    }, {"name": "updaterName", "value": "dima"}, {
        "name": "updaterFullName",
        "value": "Dmitry Krasilschikov"
    }, {"name": "reporterName", "value": "dima"}, {
        "name": "reporterFullName",
        "value": "Dmitry Krasilschikov"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Vyacheslav Lukianov", "value": "hoegaarden"}]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26496",
    "entityId": "25-747929",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26496"
    }, {
        "name": "summary",
        "value": "git commit message with multiple issue numbers causes no messages to be attached"
    }, {
        "name": "description",
        "value": "What steps will reproduce the problem?\n1. commit code using git with a message that has multiple issue numbers in it\n2. example git commit -m \"this is a commit for issues #mep-204 #mep-205 #mep-206\"\n\nWhat is the expected result?\nThe commit message \"this is a commit for issues #mep-204 #mep-205 #mep-206\" should be attached as a comment to issues #mep-204, #mep-205, #mep-206\n\nWhat happens instead?\nCommit message is not attached to any issue\n\nPlease provide any additional information below.\nAttach a screenshot if possible\n"
    }, {"name": "created", "value": "1410998134178"}, {
        "name": "updated",
        "value": "1410998134178"
    }, {"name": "updaterName", "value": "Paul_Preibisch"}, {
        "name": "updaterFullName",
        "value": "Paul Preibisch"
    }, {"name": "reporterName", "value": "Paul_Preibisch"}, {
        "name": "reporterFullName",
        "value": "Paul Preibisch"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Submitted"],
        "valueId": ["Submitted"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26495",
    "entityId": "25-747928",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26495"
    }, {
        "name": "summary",
        "value": "adding multiple issue numbers in git commit causes commit message not to show up in youtrack"
    }, {
        "name": "description",
        "value": "What steps will reproduce the problem?\n1. commit code using git with a message that has multiple issue numbers in it\n2. example git commit -m \"this is a commit for issues #mep-204 #mep-205 #mep-206\"\n\nWhat is the expected result?\nThe commit message \"this is a commit for issues #mep-204 #mep-205 #mep-206\" should be attached as a comment to issues #mep-204, #mep-205, #mep-206\n\nWhat happens instead?\nCommit message is not attached to any issue\n\nPlease provide any additional information below.\nAttach a screenshot if possible\n"
    }, {"name": "created", "value": "1410998038038"}, {
        "name": "updated",
        "value": "1410998038038"
    }, {"name": "updaterName", "value": "Paul_Preibisch"}, {
        "name": "updaterFullName",
        "value": "Paul Preibisch"
    }, {"name": "reporterName", "value": "Paul_Preibisch"}, {
        "name": "reporterFullName",
        "value": "Paul Preibisch"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Submitted"],
        "valueId": ["Submitted"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26186",
    "entityId": "25-735524",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26186"
    }, {
        "name": "summary",
        "value": "The distance between the icon of priority and text - 8px. Between ID and Summary — 8 px. Leading — 32px. All text is blue!"
    }, {"name": "description", "value": "!Снимок экрана 2014-08-26 в 15.20.01.png!"}, {
        "name": "created",
        "value": "1409052101008"
    }, {"name": "updated", "value": "1410994999048"}, {
        "name": "updaterName",
        "value": "jetbrains.teamcity"
    }, {"name": "updaterFullName", "value": "JetBrains TeamCity"}, {
        "name": "resolved",
        "value": "1410994910536"
    }, {"name": "reporterName", "value": "artemtiunov"}, {
        "name": "reporterFullName",
        "value": "Artem Tiunov"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-7082"}]
    }, {
        "name": "Priority",
        "value": ["Major"],
        "valueId": ["Major"],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {
        "name": "Type",
        "value": ["Cosmetics"],
        "valueId": ["Cosmetics"],
        "color": {"bg": "#d9ffc8", "fg": "#000"}
    }, {
        "name": "State",
        "value": ["Fixed"],
        "valueId": ["Fixed"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Alexander Anisimov", "value": "xi-eye"}]}, {
        "name": "Subsystem",
        "value": ["Dashboard"],
        "valueId": [],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Fixed in builds",
        "value": ["11501"],
        "valueId": []
    }, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-182917",
            "url": "https://youtrack.jetbrains.com/_persistent/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202014-08-26%20%D0%B2%2015.20.01.png?file=74-182917&v=0&c=true",
            "value": "Снимок экрана 2014-08-26 в 15.20.01.png"
        }]
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26485",
    "entityId": "25-747694",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26485"
    }, {"name": "summary", "value": "What's new design is broken"}, {
        "name": "created",
        "value": "1410963378979"
    }, {"name": "updated", "value": "1410987927960"}, {
        "name": "updaterName",
        "value": "jetbrains.teamcity"
    }, {"name": "updaterFullName", "value": "JetBrains TeamCity"}, {
        "name": "resolved",
        "value": "1410977604139"
    }, {"name": "reporterName", "value": "vgurov"}, {
        "name": "reporterFullName",
        "value": "Vadim Gurov"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {
        "name": "Type",
        "value": ["Cosmetics"],
        "valueId": ["Cosmetics"],
        "color": {"bg": "#d9ffc8", "fg": "#000"}
    }, {
        "name": "State",
        "value": ["Fixed"],
        "valueId": ["Fixed"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Alexander Anisimov", "value": "xi-eye"}]}, {
        "name": "Subsystem",
        "value": ["UI"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Fixed in builds",
        "value": ["11500"],
        "valueId": []
    }, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-186342",
            "url": "https://youtrack.jetbrains.com/_persistent/image.png?file=74-186342&v=0&c=true",
            "value": "image.png"
        }]
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26422",
    "entityId": "25-745934",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26422"
    }, {
        "name": "summary",
        "value": "There is no menu with Logout and Profile links on dashboard"
    }, {"name": "description", "value": "same for reports"}, {
        "name": "created",
        "value": "1410763989382"
    }, {"name": "updated", "value": "1410987750714"}, {
        "name": "updaterName",
        "value": "xi-eye"
    }, {"name": "updaterFullName", "value": "Alexander Anisimov"}, {
        "name": "reporterName",
        "value": "vgurov"
    }, {"name": "reporterFullName", "value": "Vadim Gurov"}, {"name": "commentsCount", "value": "0"}, {
        "name": "votes",
        "value": "0"
    }, {"name": "links", "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-7082"}]}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Alexander Anisimov", "value": "xi-eye"}]}, {
        "name": "Subsystem",
        "value": ["Dashboard"],
        "valueId": [],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26070",
    "entityId": "25-731128",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26070"
    }, {
        "name": "summary",
        "value": "Widget header actions falls from header after widget is created"
    }, {"name": "created", "value": "1408441448348"}, {
        "name": "updated",
        "value": "1410985813268"
    }, {"name": "updaterName", "value": "xi-eye"}, {
        "name": "updaterFullName",
        "value": "Alexander Anisimov"
    }, {"name": "reporterName", "value": "Leonid.Stryuk"}, {
        "name": "reporterFullName",
        "value": "Leonid Stryuk"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "2"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "is duplicated by", "value": "JT-26178"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-26494"
        }, {"type": "Subtask", "role": "subtask of", "value": "JT-7082"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Task"], "valueId": ["Task"]}, {
        "name": "State",
        "value": ["In Progress"],
        "valueId": ["In Progress"],
        "color": {"bg": "#00a1b4", "fg": "white"}
    }, {"name": "Assignee", "value": [{"fullName": "Pavel Nikolaev", "value": "pasha"}]}, {
        "name": "Subsystem",
        "value": ["Dashboard"],
        "valueId": [],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Browser",
        "value": ["Chrome 32.x"],
        "valueId": ["Chrome 32.x"]
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26494",
    "entityId": "25-747890",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26494"
    }, {"name": "summary", "value": "Widget controls moved out from title area"}, {
        "name": "description",
        "value": "Click edit link\nClick Cancel button"
    }, {"name": "created", "value": "1410983592957"}, {
        "name": "updated",
        "value": "1410985404242"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "resolved", "value": "1410985404261"}, {
        "name": "reporterName",
        "value": "xi-eye"
    }, {"name": "reporterFullName", "value": "Alexander Anisimov"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "duplicates", "value": "JT-26070"}, {
            "type": "Subtask",
            "role": "subtask of",
            "value": "JT-7082"
        }]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {
        "name": "Type",
        "value": ["Cosmetics"],
        "valueId": ["Cosmetics"],
        "color": {"bg": "#d9ffc8", "fg": "#000"}
    }, {"name": "State", "value": ["Duplicate"], "valueId": ["Duplicate"]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26441",
    "entityId": "25-746244",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26441"
    }, {"name": "summary", "value": "There is now administration link when logged in as root"}, {
        "name": "description",
        "value": "What steps will reproduce the problem?\n1.install youtrack Standalon JAR (Version: 5.2.5 Build: 8823) as linux service (Ubuntu 14.04 x64 JDK 1.7.0_67 Oracle) by this method http://confluence.jetbrains.com/display/YTD5/Linux.+YouTrack+JAR+as+a+Service.+Alternative+Method\n2. first login as root\n3. create some project (doesn't matter which)\n4. log out\n5. log in as root again\n\nWhat is the expected result?\nSee Administration link (or something to get admin panel)\nhttp://confluence.jetbrains.com/download/attachments/51938233/adminLink.png\n\nWhat happens instead?\nOnly dashboard with no way to get admin panel\n\nPlease provide any additional information below.\nI can still reach admin panel in this case by directly go to {URL_YOUTRACK_INSTALLED}/projects in browser\n"
    }, {"name": "created", "value": "1410790294886"}, {
        "name": "updated",
        "value": "1410985378844"
    }, {"name": "updaterName", "value": "xi-eye"}, {
        "name": "updaterFullName",
        "value": "Alexander Anisimov"
    }, {"name": "reporterName", "value": "kyiv2012"}, {
        "name": "reporterFullName",
        "value": "Michael Rusin"
    }, {"name": "commentsCount", "value": "1"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Alexander Buturlinov", "value": "alexander.buturlinov"}]
    }, {"name": "Subsystem", "value": ["UI"], "valueId": []}, {
        "name": "Affected versions",
        "value": ["5.2.5"],
        "valueId": []
    }, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-185903",
            "url": "https://youtrack.jetbrains.com/_persistent/no_administration_link.png?file=74-185903&v=0&c=true",
            "value": "no_administration_link.png"
        }]
    }],
    "comment": [{
        "id": "27-802168",
        "author": "xi-eye",
        "authorFullName": "Alexander Anisimov",
        "issueId": "JT-26441",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Alexander, could you please try to reproduce. I can't just starting YT via jar.",
        "shownForIssueAuthor": false,
        "created": 1410985378878,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26183",
    "entityId": "25-735474",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26183"
    }, {
        "name": "summary",
        "value": "The widget title initially should be black colored (#1a1a1a), but when you hover over the card — becomes blue"
    }, {
        "name": "description",
        "value": "!Снимок экрана 2014-08-26 в 14.12.33.png!\n\n!Снимок экрана 2014-08-26 в 14.20.15.png!"
    }, {"name": "created", "value": "1409048491829"}, {
        "name": "updated",
        "value": "1410985027256"
    }, {"name": "updaterName", "value": "xi-eye"}, {
        "name": "updaterFullName",
        "value": "Alexander Anisimov"
    }, {"name": "resolved", "value": "1410985027135"}, {
        "name": "reporterName",
        "value": "artemtiunov"
    }, {"name": "reporterFullName", "value": "Artem Tiunov"}, {"name": "commentsCount", "value": "1"}, {
        "name": "votes",
        "value": "0"
    }, {"name": "links", "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-7082"}]}, {
        "name": "Priority",
        "value": ["Major"],
        "valueId": ["Major"],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {
        "name": "Type",
        "value": ["Cosmetics"],
        "valueId": ["Cosmetics"],
        "color": {"bg": "#d9ffc8", "fg": "#000"}
    }, {
        "name": "State",
        "value": ["Fixed"],
        "valueId": ["Fixed"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Alexander Anisimov", "value": "xi-eye"}]}, {
        "name": "Subsystem",
        "value": ["Dashboard"],
        "valueId": [],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Fixed in builds",
        "value": ["11225", "11273"],
        "valueId": []
    }, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-182887",
            "url": "https://youtrack.jetbrains.com/_persistent/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202014-08-26%20%D0%B2%2014.12.33.png?file=74-182887&v=0&c=true",
            "value": "Снимок экрана 2014-08-26 в 14.12.33.png"
        }, {
            "id": "74-182888",
            "url": "https://youtrack.jetbrains.com/_persistent/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202014-08-26%20%D0%B2%2014.20.15.png?file=74-182888&v=0&c=true",
            "value": "Снимок экрана 2014-08-26 в 14.20.15.png"
        }]
    }],
    "comment": [{
        "id": "27-801853",
        "author": "xi-eye",
        "authorFullName": "Alexander Anisimov",
        "issueId": "JT-26183",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Почему он должен стать синим? Если мы нажмем на виджет мы не вызовем ту же реакцию что и при нажатии на заголовок",
        "shownForIssueAuthor": false,
        "created": 1410961194990,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-7082",
    "entityId": "25-208980",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "7082"
    }, {"name": "summary", "value": "Dashboard with reports and widgets"}, {
        "name": "description",
        "value": "# user may customize dashboard with different widgets\n# widgets are layed out in a grid, like iGoogle or HTC Sense\n# widgets are reports, charts, issues list, tags list, saved searches list, etc\n# current matrix report will be a widget\n# examples of widgets: \nhttp://confluence.jetbrains.net/display/TSYS/Widgets+for+YouTrack+Daring+dashboard\nhttp://devnet.jetbrains.net/thread/288811?tstart=0\n\n# type of reports:\n How many bugs were open more than X days\n How long is the average time from open to close of issues\n The number of new bugs opened per day for the product (or for a feature).\n The number of open bugs each day with a specific tag\n The fix rate per day\n How long did an issue sit in each status?\n What is the average time for all issues over a period in a status?\nhttp://visualstudiomagazine.com/articles/2008/05/19/team-foundation-server-reports.aspx\n"
    }, {"name": "created", "value": "1285757025709"}, {
        "name": "updated",
        "value": "1410983599720"
    }, {"name": "updaterName", "value": "xi-eye"}, {
        "name": "updaterFullName",
        "value": "Alexander Anisimov"
    }, {"name": "reporterName", "value": "vgurov"}, {
        "name": "reporterFullName",
        "value": "Vadim Gurov"
    }, {"name": "commentsCount", "value": "7"}, {"name": "votes", "value": "76"}, {
        "name": "links",
        "value": [{"type": "Depend", "role": "is required for", "value": "JT-10643"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-15062"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-19005"}, {
            "type": "Relates",
            "role": "relates to",
            "value": "JT-370"
        }, {"type": "Relates", "role": "relates to", "value": "JT-2203"}, {
            "type": "Relates",
            "role": "relates to",
            "value": "JT-5333"
        }, {"type": "Relates", "role": "relates to", "value": "JT-5996"}, {
            "type": "Relates",
            "role": "relates to",
            "value": "JT-6791"
        }, {"type": "Relates", "role": "relates to", "value": "JT-8226"}, {
            "type": "Relates",
            "role": "relates to",
            "value": "JT-8822"
        }, {"type": "Relates", "role": "relates to", "value": "JT-10183"}, {
            "type": "Relates",
            "role": "relates to",
            "value": "JT-10511"
        }, {"type": "Relates", "role": "relates to", "value": "JT-10525"}, {
            "type": "Relates",
            "role": "relates to",
            "value": "JT-1138"
        }, {"type": "Relates", "role": "relates to", "value": "JT-2763"}, {
            "type": "Relates",
            "role": "relates to",
            "value": "JT-13480"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25635"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25856"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25857"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25858"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25910"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25937"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25969"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25979"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26005"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26014"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26015"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26051"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26055"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26057"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26069"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26070"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26090"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26094"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26096"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26104"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26115"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26132"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26137"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26163"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26168"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26169"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26171"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26179"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26180"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26181"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26183"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26186"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26187"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26188"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26189"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26190"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26217"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26226"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26236"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26255"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26270"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26284"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26287"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26289"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26297"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26327"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26375"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26376"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26422"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26427"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26434"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26447"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26448"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26494"
        }]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Feature"], "valueId": ["Feature"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Leonid Stryuk", "value": "Leonid.Stryuk"}]}, {
        "name": "Subsystem",
        "value": ["Dashboard"],
        "valueId": [],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [{
        "id": "27-251251",
        "author": "valerie.andrianova",
        "authorFullName": "valerie andrianova",
        "issueId": "JT-7082",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Feedback:\nTo give you an idea, my dashboard in Jira currently looks like this:\n\nThe lists on the left-hand side are all pretty straightforward:\n\n- Title bar shows how many issues are shown/how many there are in total\n- user-configurable number of the issues in list can be displayed on the home page\n- \"In Progress\" are issues I'm currently working on (kind of clear, I guess)\n- \"Assigned, but not started\" are assigned to me, but I'm not working on them yet\n- \"Waiting to be resolved\" are issues I reported that are waiting for me to confirm and close them\n- \"Resolved, but not closed\" are issues I resolved but that have not yet been confirmed and closed\n- \"Watches\" are issues I'm interested in but were not necessarily reported by me or are assigned to me\n- \"Recently resolved or closed\" is nice to be able to quickly browse recent issue history\n- \"Project roadmap\" includes a link to the home page for that project (where I can get the change logs and browse history)\n\nThis setup gives me a one-look overview of the projects most interesting for me without having to click around a lot.",
        "shownForIssueAuthor": false,
        "created": 1316780879661,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-263782",
        "author": "p.kennedy@fugro.com.au",
        "authorFullName": "Paul Kennedy",
        "issueId": "JT-7082",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Hi, This would be very much appreciated.  Any ideas on a timeline for fascination?  even an approximate one is better than nothin.g  It save us re-inventing a wheel you are working one;-)\n",
        "shownForIssueAuthor": false,
        "created": 1320823948998,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-296449",
        "author": "encodo",
        "authorFullName": "Encodo Systems AG",
        "issueId": "JT-7082",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "It's been a while since Paul asked about a timeline for this feature. Is there any news here? This issue keeps getting more and more votes but it's not assigned, so it's likely not even being worked on, right? Thanks for any information you may have.",
        "shownForIssueAuthor": false,
        "created": 1329286167529,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-296683",
        "author": "valerie.andrianova",
        "authorFullName": "valerie andrianova",
        "issueId": "JT-7082",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Hi everyone! Yes, we agree that this feature is very important and it keeps getting more votes. According to our plan, Agile Management support is our main goal for the coming version. So we plan to start implementing this functionality right after agile support, probably in parallel with localization feature request, and we plan to include it to the next version. Thanks for your  interest and patience.",
        "shownForIssueAuthor": false,
        "created": 1329310905173,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-453827",
        "author": "Craig.Bass",
        "authorFullName": "Craig Bass",
        "issueId": "JT-7082",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Seriously YouTrack would be awesome if Gantt charts and better managerial views existed!",
        "shownForIssueAuthor": false,
        "created": 1362420412561,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-498463",
        "author": "Andreas.Larsen",
        "authorFullName": "Andreas Larsen",
        "issueId": "JT-7082",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "I am missing things like the following to help assess progress during a sprint and when planning a new sprint.\n\nProgress during sprint:\n* Burndown/cumulative charts for entire team (the same as in agile board under the charts button)\n* Burndown charts for individuals (is anyone lagging behind their ideal burndown?)\n\nPlanning a sprint (maybe in a dashboard view for a specific sprint):\n* Capacity for team and individuals \n** How many stories/tasks can be included? \n** Are any of the members overloaded or have capacity to spare?\n* Any blocking issues? \n** Are any of the tasks for one member dependent on tasks from another member in this sprint, or even worse, dependent on tasks that are unscheduled or scheduled for later sprints?",
        "shownForIssueAuthor": false,
        "created": 1367830278070,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-542257",
        "author": "agutsul",
        "authorFullName": "Artem Goutsoul",
        "issueId": "JT-7082",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "I probably created a duplicate sometime ago: JT-20089 . One additional thing in JT-20089 is that it would be great if activity feed (JT-16178) would be one of the possible widgets.",
        "shownForIssueAuthor": false,
        "created": 1372849647184,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26453",
    "entityId": "25-746737",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26453"
    }, {
        "name": "summary",
        "value": "burndown chart X axis labels are out of sync with the graph"
    }, {
        "name": "description",
        "value": "X axis label is not exactly correspond the actual coordinate. See screenshot attached"
    }, {"name": "created", "value": "1410867573334"}, {
        "name": "updated",
        "value": "1410981287881"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "reporterName", "value": "philipto"}, {
        "name": "reporterFullName",
        "value": "Philip Torchinsky"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Harmonicity IX"],
        "valueId": []
    }, {"name": "Affected versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-186050",
            "url": "https://youtrack.jetbrains.com/_persistent/image.png?file=74-186050&v=0&c=true",
            "value": "image.png"
        }]
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26452",
    "entityId": "25-746726",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26452"
    }, {
        "name": "summary",
        "value": "Burndown chart with same data is shown differently depending on how do you make it"
    }, {
        "name": "description",
        "value": "Affected version: 6.0 EAP\n\nIf called from Agile board for a project with time tracking enabled, burndown chart shows the time (remaining effort/time spent). If called from Reports page from top menu, it does not show time."
    }, {"name": "created", "value": "1410867150783"}, {
        "name": "updated",
        "value": "1410981218215"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "reporterName", "value": "philipto"}, {
        "name": "reporterFullName",
        "value": "Philip Torchinsky"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Submitted"],
        "valueId": ["Submitted"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Harmonicity IX"],
        "valueId": []
    }, {"name": "Affected versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-186046",
            "url": "https://youtrack.jetbrains.com/_persistent/YT-6.0-wrongburndown.gif?file=74-186046&v=0&c=true",
            "value": "YT-6.0-wrongburndown.gif"
        }]
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-24175",
    "entityId": "25-680515",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "24175"
    }, {"name": "summary", "value": "Processing took too long :("}, {
        "name": "description",
        "value": "jetbrains.charisma.main.ProcessingTookToLongException: Processing took too long :(\n\tat jetbrains.charisma.main.QueryCancellingPolicyProviderImpl$1.doCancel(QueryCancellingPolicyProviderImpl.java:27)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorBase.nextId(EntityIteratorBase.java:121)\n\tat jetbrains.exodus.database.impl.iterate.binop.ConcatenationIterable$ConcatenationIterator.nextIdImpl(ConcatenationIterable.java:99)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorFixingDecorator.nextIdImpl(EntityIteratorFixingDecorator.java:35)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorBase.nextId(EntityIteratorBase.java:124)\n\tat jetbrains.exodus.database.impl.iterate.binop.ConcatenationIterable$ConcatenationIterator.nextIdImpl(ConcatenationIterable.java:96)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorFixingDecorator.nextIdImpl(EntityIteratorFixingDecorator.java:35)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorBase.nextId(EntityIteratorBase.java:124)\n\tat jetbrains.exodus.database.impl.iterate.binop.ConcatenationIterable$ConcatenationIterator.nextIdImpl(ConcatenationIterable.java:99)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorFixingDecorator.nextIdImpl(EntityIteratorFixingDecorator.java:35)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorBase.nextId(EntityIteratorBase.java:124)\n\tat jetbrains.exodus.database.impl.iterate.EntityIdArrayIterableWrapper.extractNextId(EntityIdArrayIterableWrapper.java:181)\n\tat jetbrains.exodus.database.impl.iterate.EntityIdArrayIterableWrapper.<init>(EntityIdArrayIterableWrapper.java:160)\n\tat jetbrains.exodus.database.impl.iterate.EntityIterableBase.createCachedWrapper(EntityIterableBase.java:389)\n\tat jetbrains.exodus.database.impl.iterate.EntityIterableBase.getOrCreateCachedWrapper(EntityIterableBase.java:329)\n\tat jetbrains.exodus.database.impl.iterate.EntityIterableBase.toSet(EntityIterableBase.java:356)\n\tat jetbrains.exodus.database.impl.iterate.binop.IntersectionIterable$UnsortedIterator.getEntityIdSet(IntersectionIterable.java:186)\n\tat jetbrains.exodus.database.impl.iterate.binop.IntersectionIterable$UnsortedIterator.hasNextImpl(IntersectionIterable.java:165)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorFixingDecorator.hasNextImpl(EntityIteratorFixingDecorator.java:26)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorBase.hasNext(EntityIteratorBase.java:68)\n\tat jetbrains.exodus.database.impl.iterate.EntityIterableBase.getFirst(EntityIterableBase.java:339)\n\tat jetbrains.exodus.database.PersistentStoreTransaction.getFirst(PersistentStoreTransaction.java:519)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl.getFirst(TransientSessionImpl.java:400)\n\tat jetbrains.teamsys.dnq.runtime.queries.QueryOperations.getFirst(QueryOperations.java:226)\n\tat jetbrains.charisma.customfields.complex.common.BundleProjectCustomFieldImpl.createValueFromString(BundleProjectCustomFieldImpl.java:121)\n\tat jetbrains.youtrack.workflow.wrappers.CustomReferenceFieldValueResolver.resolveEnumReference(CustomReferenceFieldValueResolver.java:40)\n\tat jetbrains.youtrack.workflow.checker.TypeChecker.checkValues(TypeChecker.java:34)\n\tat jetbrains.youtrack.workflow.checker.TypeChecker.checkType(TypeChecker.java:28)\n\tat jetbrains.youtrack.workflow.checker.TypeChecker.checkField(TypeChecker.java:69)\n\tat jetbrains.youtrack.workflow.checker.TypeChecker.checkFields(TypeChecker.java:52)\n\tat jetbrains.youtrack.workflow.checker.TypeChecker.checkType(TypeChecker.java:27)\n\tat jetbrains.youtrack.workflow.checker.TypeChecker.check(TypeChecker.java:23)\n\tat jetbrains.youtrack.workflow.checker.WorkflowChecker.check(WorkflowChecker.java:34)\n\tat jetbrains.youtrack.workflow.checker.CheckerExtensions.check(CheckerExtensions.java:30)\n\tat jetbrains.youtrack.workflow.checker.CheckerExtensions.isValid(CheckerExtensions.java:34)\n\tat jetbrains.youtrack.workflow.persistent.LoadedRulesLocal.isRuleApplicable(LoadedRulesLocal.java:169)\n\tat jetbrains.youtrack.workflow.persistent.WorkflowRuleImpl.isApplicable(WorkflowRuleImpl.java:103)\n\tat jetbrains.youtrack.workflow.persistent.WorkflowRuleImpl$2.accept(WorkflowRuleImpl.java:190)\n\tat jetbrains.youtrack.workflow.persistent.WorkflowRuleImpl$2.accept(WorkflowRuleImpl.java:188)\n\tat jetbrains.mps.internal.collections.runtime.IWhereFilter.invoke(IWhereFilter.java:14)\n\tat jetbrains.mps.internal.collections.runtime.IWhereFilter.invoke(IWhereFilter.java:7)\n\tat jetbrains.mps.internal.collections.runtime.impl.FilteringSequence$FilteringIterator.moveToNext(FilteringSequence.java:68)\n\tat jetbrains.mps.internal.collections.runtime.impl.FilteringSequence$FilteringIterator.hasNext(FilteringSequence.java:37)\n\tat jetbrains.youtrack.workflow.ext.WorkflowIssueListener.beforeFlush(WorkflowIssueListener.java:112)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl$4.visit(TransientSessionImpl.java:1061)\n\tat com.jetbrains.teamsys.dnq.database.TransientEntityStoreImpl.forAllListeners(TransientEntityStoreImpl.java:315)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl.notifyBeforeFlushListeners(TransientSessionImpl.java:1058)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl.beforeFlush(TransientSessionImpl.java:941)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl.flushChanges(TransientSessionImpl.java:717)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl.flush(TransientSessionImpl.java:159)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateActionController.handleEventImpl(TemplateActionController.java:141)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateActionController.handleEvent(TemplateActionController.java:115)\n\tat jetbrains.mps.webr.runtime.requestProcessor.EventRequestProcessor.processRequest(EventRequestProcessor.java:75)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.processRequest(MainServlet.java:228)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:114)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doPost(MainServlet.java:192)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:754)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:847)\n\tat org.eclipse.jetty.servlet.ServletHolder.handle(ServletHolder.java:648)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1336)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:453)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:137)\n\tat org.eclipse.jetty.security.SecurityHandler.handle(SecurityHandler.java:559)\n\tat org.eclipse.jetty.server.session.SessionHandler.doHandle(SessionHandler.java:231)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1072)\n\tat org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:382)\n\tat org.eclipse.jetty.server.session.SessionHandler.doScope(SessionHandler.java:193)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1006)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:135)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:116)\n\tat org.eclipse.jetty.server.Server.handle(Server.java:365)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.handleRequest(AbstractHttpConnection.java:485)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.content(AbstractHttpConnection.java:937)\n\tat org.eclipse.jetty.server.AbstractHttpConnection$RequestHandler.content(AbstractHttpConnection.java:998)\n\tat org.eclipse.jetty.http.HttpParser.parseNext(HttpParser.java:856)\n\tat org.eclipse.jetty.http.HttpParser.parseAvailable(HttpParser.java:240)\n\tat org.eclipse.jetty.server.AsyncHttpConnection.handle(AsyncHttpConnection.java:82)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint.handle(SelectChannelEndPoint.java:627)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint$1.run(SelectChannelEndPoint.java:51)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:608)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool$3.run(QueuedThreadPool.java:543)\n\tat java.lang.Thread.run(Thread.java:662)\n\n\n===Environment details===\nhost: ip-10-174-121-192.us-west-1.compute.internal\nbase url: http://youtrack.oggifinogi.com\nversion: 5.0.5\nbuild: 7527 [28-Oct-2013 19:43] \njava.version: 1.6.0_32\njava.vendor: Sun Microsystems Inc.\njava.vm.specification.version: 1.0\njava.vm.specification.vendor: Sun Microsystems Inc.\njava.vm.specification.name: Java Virtual Machine Specification\njava.vm.version: 20.7-b02\njava.vm.vendor: Sun Microsystems Inc.\njava.vm.name: Java HotSpot(TM) 64-Bit Server VM\njava.specification.version: 1.6\njava.specification.vendor: Sun Microsystems Inc.\njava.specification.name: Java Platform API Specification\njava.class.version: 50.0\nos.name: Linux\nos.arch: amd64\nos.version: 3.0.0-16-virtual\nMax memory: 1 GB (2138767360 bytes)\nFree memory: 18 MB (18931544 bytes)\nTotal memory: 1 GB (2138767360 bytes)\nAvailable processors: 4\nThrown at: Friday, March 21, 2014 4:31:24 PM UTC"
    }, {"name": "created", "value": "1395419782756"}, {
        "name": "updated",
        "value": "1410980053368"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "reporterName", "value": "app_exception"}, {
        "name": "reporterFullName",
        "value": "Exception Robot"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "is duplicated by", "value": "JT-26479"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Pavel Nikitin", "value": "pavel.nikitin"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Affected versions", "value": ["5.0.5"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26479",
    "entityId": "25-747476",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26479"
    }, {"name": "summary", "value": "Processing took too long :("}, {
        "name": "description",
        "value": "jetbrains.charisma.main.ProcessingTookToLongException: Processing took too long :(\n\tat jetbrains.charisma.main.QueryCancellingPolicyProviderImpl$1.doCancel(QueryCancellingPolicyProviderImpl.java:27)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorBase.nextId(EntityIteratorBase.java:130)\n\tat jetbrains.exodus.database.impl.iterate.binop.ConcatenationIterable$ConcatenationIterator.nextIdImpl(ConcatenationIterable.java:114)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorFixingDecorator.nextIdImpl(EntityIteratorFixingDecorator.java:50)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorBase.nextId(EntityIteratorBase.java:133)\n\tat jetbrains.exodus.database.impl.iterate.EntityIdArrayIterableWrapper.extractNextId(EntityIdArrayIterableWrapper.java:194)\n\tat jetbrains.exodus.database.impl.iterate.EntityIdArrayIterableWrapper.<init>(EntityIdArrayIterableWrapper.java:99)\n\tat jetbrains.exodus.database.impl.iterate.EntityIterableBase.createCachedWrapper(EntityIterableBase.java:420)\n\tat jetbrains.exodus.database.impl.iterate.EntityIterableBase.getOrCreateCachedWrapper(EntityIterableBase.java:357)\n\tat jetbrains.exodus.database.impl.iterate.EntityIterableBase.toSet(EntityIterableBase.java:387)\n\tat jetbrains.exodus.database.impl.iterate.binop.IntersectionIterable$UnsortedIterator.getEntityIdSet(IntersectionIterable.java:191)\n\tat jetbrains.exodus.database.impl.iterate.binop.IntersectionIterable$UnsortedIterator.hasNextImpl(IntersectionIterable.java:175)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorFixingDecorator.hasNextImpl(EntityIteratorFixingDecorator.java:41)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorBase.hasNext(EntityIteratorBase.java:77)\n\tat jetbrains.exodus.database.impl.iterate.EntityIterableBase.getFirst(EntityIterableBase.java:368)\n\tat jetbrains.exodus.database.PersistentStoreTransaction.getFirst(PersistentStoreTransaction.java:576)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl.getFirst(TransientSessionImpl.java:411)\n\tat jetbrains.teamsys.dnq.runtime.queries.QueryOperations.getFirst(QueryOperations.java:226)\n\tat jetbrains.charisma.persistence.customfields.CustomFieldPrototypeImpl.getProjectCustomField(CustomFieldPrototypeImpl.java:168)\n\tat jetbrains.youtrack.workflow.wrappers.CustomReferenceFieldValueResolver.resolveEnumReference(CustomReferenceFieldValueResolver.java:38)\n\tat jetbrains.youtrack.workflow.checker.TypeChecker.checkValues(TypeChecker.java:40)\n\tat jetbrains.youtrack.workflow.checker.TypeChecker.checkType(TypeChecker.java:34)\n\tat jetbrains.youtrack.workflow.checker.TypeChecker.checkField(TypeChecker.java:83)\n\tat jetbrains.youtrack.workflow.checker.TypeChecker.checkFields(TypeChecker.java:66)\n\tat jetbrains.youtrack.workflow.checker.TypeChecker.checkType(TypeChecker.java:33)\n\tat jetbrains.youtrack.workflow.checker.TypeChecker.check(TypeChecker.java:29)\n\tat jetbrains.youtrack.workflow.checker.WorkflowChecker.check(WorkflowChecker.java:34)\n\tat jetbrains.youtrack.workflow.checker.CheckerExtensions.check(CheckerExtensions.java:30)\n\tat jetbrains.youtrack.workflow.checker.CheckerExtensions.isValid(CheckerExtensions.java:34)\n\tat jetbrains.youtrack.workflow.persistent.LoadedRulesLocal.isRuleApplicable(LoadedRulesLocal.java:170)\n\tat jetbrains.youtrack.workflow.persistent.WorkflowRuleImpl.isApplicable(WorkflowRuleImpl.java:103)\n\tat jetbrains.youtrack.workflow.persistent.WorkflowRuleImpl$2.accept(WorkflowRuleImpl.java:190)\n\tat jetbrains.youtrack.workflow.persistent.WorkflowRuleImpl$2.accept(WorkflowRuleImpl.java:188)\n\tat jetbrains.mps.internal.collections.runtime.IWhereFilter.invoke(IWhereFilter.java:14)\n\tat jetbrains.mps.internal.collections.runtime.IWhereFilter.invoke(IWhereFilter.java:7)\n\tat jetbrains.mps.internal.collections.runtime.impl.FilteringSequence$FilteringIterator.moveToNext(FilteringSequence.java:68)\n\tat jetbrains.mps.internal.collections.runtime.impl.FilteringSequence$FilteringIterator.hasNext(FilteringSequence.java:37)\n\tat jetbrains.youtrack.workflow.ext.WorkflowIssueListener.beforeFlush(WorkflowIssueListener.java:113)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl$4.visit(TransientSessionImpl.java:1075)\n\tat com.jetbrains.teamsys.dnq.database.TransientEntityStoreImpl.forAllListeners(TransientEntityStoreImpl.java:338)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl.notifyBeforeFlushListeners(TransientSessionImpl.java:1072)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl.beforeFlush(TransientSessionImpl.java:955)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl.flushChanges(TransientSessionImpl.java:728)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl.flush(TransientSessionImpl.java:167)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateActionController.handleEventImpl(TemplateActionController.java:146)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateActionController.handleEvent(TemplateActionController.java:120)\n\tat jetbrains.mps.webr.runtime.requestProcessor.EventRequestProcessor.processRequest(EventRequestProcessor.java:75)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.processRequest(MainServlet.java:252)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:138)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doPost(MainServlet.java:216)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:754)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:847)\n\tat org.eclipse.jetty.servlet.ServletHolder.handle(ServletHolder.java:648)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1336)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:453)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:137)\n\tat org.eclipse.jetty.security.SecurityHandler.handle(SecurityHandler.java:559)\n\tat org.eclipse.jetty.server.session.SessionHandler.doHandle(SessionHandler.java:231)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1072)\n\tat org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:382)\n\tat org.eclipse.jetty.server.session.SessionHandler.doScope(SessionHandler.java:193)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1006)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:135)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:116)\n\tat org.eclipse.jetty.server.Server.handle(Server.java:365)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.handleRequest(AbstractHttpConnection.java:485)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.content(AbstractHttpConnection.java:937)\n\tat org.eclipse.jetty.server.AbstractHttpConnection$RequestHandler.content(AbstractHttpConnection.java:998)\n\tat org.eclipse.jetty.http.HttpParser.parseNext(HttpParser.java:856)\n\tat org.eclipse.jetty.http.HttpParser.parseAvailable(HttpParser.java:240)\n\tat org.eclipse.jetty.server.AsyncHttpConnection.handle(AsyncHttpConnection.java:82)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint.handle(SelectChannelEndPoint.java:627)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint$1.run(SelectChannelEndPoint.java:51)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:608)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool$3.run(QueuedThreadPool.java:543)\n\tat java.lang.Thread.run(Thread.java:701)\n\n\n===Environment details===\nhost: static.205.124.4.46.clients.your-server.de\nbase url: http://ticket.neurosys.pl\nversion: 5.2\nbuild: 8723 [16-Apr-2014 17:21] \njava.version: 1.6.0_32\njava.vendor: Sun Microsystems Inc.\njava.vm.specification.version: 1.0\njava.vm.specification.vendor: Sun Microsystems Inc.\njava.vm.specification.name: Java Virtual Machine Specification\njava.vm.version: 23.25-b01\njava.vm.vendor: Sun Microsystems Inc.\njava.vm.name: OpenJDK 64-Bit Server VM\njava.specification.version: 1.6\njava.specification.vendor: Sun Microsystems Inc.\njava.specification.name: Java Platform API Specification\njava.class.version: 50.0\nos.name: Linux\nos.arch: amd64\nos.version: 3.2.0-4-amd64\nMax memory: 455 MB (477233152 bytes)\nFree memory: 24 MB (26027312 bytes)\nTotal memory: 327 MB (343212032 bytes)\nAvailable processors: 8\nThrown at: Wednesday, September 17, 2014 1:09:02 PM CEST"
    }, {"name": "created", "value": "1410952151947"}, {
        "name": "updated",
        "value": "1410980053320"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "resolved", "value": "1410980053342"}, {
        "name": "reporterName",
        "value": "app_exception"
    }, {"name": "reporterFullName", "value": "Exception Robot"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "duplicates", "value": "JT-24175"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Duplicate"],
        "valueId": ["Duplicate"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Affected versions",
        "value": ["5.2"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26491",
    "entityId": "25-747807",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26491"
    }, {"name": "summary", "value": "ByteIterable length can't be less than zero"}, {
        "name": "description",
        "value": "jetbrains.exodus.exceptions.ExodusException: ByteIterable length can't be less than zero\n\tat jetbrains.exodus.log.iterate.FixedLengthByteIterable.<init>(FixedLengthByteIterable.java:32)\n\tat jetbrains.exodus.log.iterate.FixedLengthByteIterable.<init>(FixedLengthByteIterable.java:40)\n\tat jetbrains.exodus.tree.btree.LeafNode.getValue(LeafNode.java:77)\n\tat jetbrains.exodus.tree.btree.BTreeTraverser.getValue(BTreeTraverser.java:74)\n\tat jetbrains.exodus.tree.TreeCursor.getValue(TreeCursor.java:168)\n\tat jetbrains.exodus.env.CursorImpl.getValue(CursorImpl.java:97)\n\tat jetbrains.exodus.database.impl.iterate.PropertiesIterable$PropertiesIterator.nextIdImpl(PropertiesIterable.java:184)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorBase.nextId(EntityIteratorBase.java:134)\n\tat jetbrains.exodus.database.impl.iterate.SortIterable$NonStableSortIterator.hasNextImpl(SortIterable.java:293)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorFixingDecorator.hasNextImpl(EntityIteratorFixingDecorator.java:41)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorBase.hasNext(EntityIteratorBase.java:79)\n\tat com.jetbrains.teamsys.dnq.database.PersistentEntityIteratorWrapper.hasNext(PersistentEntityIteratorWrapper.java:21)\n\tat jetbrains.mps.internal.collections.runtime.impl.FilteringSequence$FilteringIterator.moveToNext(FilteringSequence.java:66)\n\tat jetbrains.mps.internal.collections.runtime.impl.FilteringSequence$FilteringIterator.hasNext(FilteringSequence.java:37)\n\tat jetbrains.mps.internal.collections.runtime.IterableUtils.count(IterableUtils.java:51)\n\tat jetbrains.mps.internal.collections.runtime.Sequence.count(Sequence.java:180)\n\tat jetbrains.teamsys.dnq.runtime.queries.QueryOperations.getSize(QueryOperations.java:86)\n\tat jetbrains.charisma.smartui.panel.attachment.AttachmentPanel_HtmlTemplateComponent$1.invoke(AttachmentPanel_HtmlTemplateComponent.java:102)\n\tat jetbrains.charisma.smartui.panel.attachment.AttachmentPanel_HtmlTemplateComponent$1.invoke(AttachmentPanel_HtmlTemplateComponent.java:84)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:468)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.comments.AddComment_HtmlTemplateComponent.renderTemplate(AddComment_HtmlTemplateComponent.java:190)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.comments.Comments_HtmlTemplateComponent.renderTemplate(Comments_HtmlTemplateComponent.java:314)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.fullScreenIssue.IssueTabs_HtmlTemplateComponent.renderTemplate(IssueTabs_HtmlTemplateComponent.java:250)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.fullScreenIssue.IssueContent_HtmlTemplateComponent.renderTemplate(IssueContent_HtmlTemplateComponent.java:152)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.fullScreenIssue.Issue_RootHtmlTemplateComponent.renderTemplate(Issue_RootHtmlTemplateComponent.java:619)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.layout.SmartUI_LayoutComponent.renderTemplate(SmartUI_LayoutComponent.java:385)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.render(TemplateComponent.java:391)\n\tat jetbrains.mps.webr.runtime.requestProcessor.ResponseFactory$2.doAction(ResponseFactory.java:79)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.executeResponseAction(MainServlet.java:198)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:149)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:620)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:727)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:303)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:220)\n\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:122)\n\tat org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:501)\n\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:170)\n\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:98)\n\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:116)\n\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:408)\n\tat org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1040)\n\tat org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:607)\n\tat org.apache.tomcat.util.net.AprEndpoint$SocketProcessor.doRun(AprEndpoint.java:2441)\n\tat org.apache.tomcat.util.net.AprEndpoint$SocketProcessor.run(AprEndpoint.java:2430)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\n\tat java.lang.Thread.run(Unknown Source)\n\n\n===Environment details===\nhost: BUILDSERVER.net.venuiti.com\nbase url: http://tracker.venuiti.com\nversion: 5.2.2\nbuild: 8792 [04-Jul-2014 13:42] \njava.version: 1.7.0_51\njava.vendor: Oracle Corporation\njava.vm.specification.version: 1.7\njava.vm.specification.vendor: Oracle Corporation\njava.vm.specification.name: Java Virtual Machine Specification\njava.vm.version: 24.51-b03\njava.vm.vendor: Oracle Corporation\njava.vm.name: Java HotSpot(TM) Client VM\njava.specification.version: 1.7\njava.specification.vendor: Oracle Corporation\njava.specification.name: Java Platform API Specification\njava.class.version: 51.0\nos.name: Windows Server 2008 R2\nos.arch: x86\nos.version: 6.1\nMax memory: 494 MB (518979584 bytes)\nFree memory: 14 MB (15431336 bytes)\nTotal memory: 494 MB (518979584 bytes)\nAvailable processors: 2\nThrown at: Wednesday, September 17, 2014 12:14:37 PM EDT"
    }, {"name": "created", "value": "1410970493646"}, {
        "name": "updated",
        "value": "1410978335754"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "reporterName", "value": "app_exception"}, {
        "name": "reporterFullName",
        "value": "Exception Robot"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "is duplicated by", "value": "JT-26492"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Submitted"],
        "valueId": ["Submitted"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Affected versions",
        "value": ["5.2.2"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26492",
    "entityId": "25-747853",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26492"
    }, {"name": "summary", "value": "ByteIterable length can't be less than zero"}, {
        "name": "description",
        "value": "jetbrains.exodus.exceptions.ExodusException: ByteIterable length can't be less than zero\n\tat jetbrains.exodus.log.iterate.FixedLengthByteIterable.<init>(FixedLengthByteIterable.java:32)\n\tat jetbrains.exodus.log.iterate.FixedLengthByteIterable.<init>(FixedLengthByteIterable.java:40)\n\tat jetbrains.exodus.tree.btree.LeafNode.getValue(LeafNode.java:77)\n\tat jetbrains.exodus.tree.btree.BTreeTraverser.getValue(BTreeTraverser.java:74)\n\tat jetbrains.exodus.tree.TreeCursor.getValue(TreeCursor.java:168)\n\tat jetbrains.exodus.env.CursorImpl.getValue(CursorImpl.java:97)\n\tat jetbrains.exodus.database.impl.iterate.PropertiesIterable$PropertiesIterator.nextIdImpl(PropertiesIterable.java:184)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorBase.nextId(EntityIteratorBase.java:134)\n\tat jetbrains.exodus.database.impl.iterate.SortIterable$NonStableSortIterator.hasNextImpl(SortIterable.java:293)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorFixingDecorator.hasNextImpl(EntityIteratorFixingDecorator.java:41)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorBase.hasNext(EntityIteratorBase.java:79)\n\tat com.jetbrains.teamsys.dnq.database.PersistentEntityIteratorWrapper.hasNext(PersistentEntityIteratorWrapper.java:21)\n\tat jetbrains.mps.internal.collections.runtime.impl.FilteringSequence$FilteringIterator.moveToNext(FilteringSequence.java:66)\n\tat jetbrains.mps.internal.collections.runtime.impl.FilteringSequence$FilteringIterator.hasNext(FilteringSequence.java:37)\n\tat jetbrains.mps.internal.collections.runtime.IterableUtils.count(IterableUtils.java:51)\n\tat jetbrains.mps.internal.collections.runtime.Sequence.count(Sequence.java:180)\n\tat jetbrains.teamsys.dnq.runtime.queries.QueryOperations.getSize(QueryOperations.java:86)\n\tat jetbrains.charisma.smartui.panel.attachment.AttachmentPanel_HtmlTemplateComponent$1.invoke(AttachmentPanel_HtmlTemplateComponent.java:102)\n\tat jetbrains.charisma.smartui.panel.attachment.AttachmentPanel_HtmlTemplateComponent$1.invoke(AttachmentPanel_HtmlTemplateComponent.java:84)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:468)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.comments.AddComment_HtmlTemplateComponent.renderTemplate(AddComment_HtmlTemplateComponent.java:190)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.comments.Comments_HtmlTemplateComponent.renderTemplate(Comments_HtmlTemplateComponent.java:314)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.fullScreenIssue.IssueTabs_HtmlTemplateComponent.renderTemplate(IssueTabs_HtmlTemplateComponent.java:250)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.fullScreenIssue.IssueContent_HtmlTemplateComponent.renderTemplate(IssueContent_HtmlTemplateComponent.java:152)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.fullScreenIssue.Issue_RootHtmlTemplateComponent.renderTemplate(Issue_RootHtmlTemplateComponent.java:619)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.layout.SmartUI_LayoutComponent.renderTemplate(SmartUI_LayoutComponent.java:385)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.render(TemplateComponent.java:391)\n\tat jetbrains.mps.webr.runtime.requestProcessor.ResponseFactory$2.doAction(ResponseFactory.java:79)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.executeResponseAction(MainServlet.java:198)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:149)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:620)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:727)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:303)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:220)\n\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:122)\n\tat org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:501)\n\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:170)\n\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:98)\n\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:116)\n\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:408)\n\tat org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1040)\n\tat org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:607)\n\tat org.apache.tomcat.util.net.AprEndpoint$SocketProcessor.doRun(AprEndpoint.java:2441)\n\tat org.apache.tomcat.util.net.AprEndpoint$SocketProcessor.run(AprEndpoint.java:2430)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\n\tat java.lang.Thread.run(Unknown Source)\n\nWith an issue created, I pasted an image from the clipboard - the Add Comment field was the active field.  I received an error upon attempting to paste teh image, and now I cannot access the issue at all - I get this error instead.\n\n\n===Environment details===\nhost: BUILDSERVER.net.venuiti.com\nbase url: http://tracker.venuiti.com\nversion: 5.2.2\nbuild: 8792 [04-Jul-2014 13:42] \njava.version: 1.7.0_51\njava.vendor: Oracle Corporation\njava.vm.specification.version: 1.7\njava.vm.specification.vendor: Oracle Corporation\njava.vm.specification.name: Java Virtual Machine Specification\njava.vm.version: 24.51-b03\njava.vm.vendor: Oracle Corporation\njava.vm.name: Java HotSpot(TM) Client VM\njava.specification.version: 1.7\njava.specification.vendor: Oracle Corporation\njava.specification.name: Java Platform API Specification\njava.class.version: 51.0\nos.name: Windows Server 2008 R2\nos.arch: x86\nos.version: 6.1\nMax memory: 494 MB (518979584 bytes)\nFree memory: 16 MB (17311824 bytes)\nTotal memory: 494 MB (518979584 bytes)\nAvailable processors: 2\nThrown at: Wednesday, September 17, 2014 2:07:53 PM EDT"
    }, {"name": "created", "value": "1410977423661"}, {
        "name": "updated",
        "value": "1410978335711"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "resolved", "value": "1410978335730"}, {
        "name": "reporterName",
        "value": "app_exception"
    }, {"name": "reporterFullName", "value": "Exception Robot"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "duplicates", "value": "JT-26491"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Duplicate"],
        "valueId": ["Duplicate"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Affected versions",
        "value": ["5.2.2"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26217",
    "entityId": "25-736303",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26217"
    }, {"name": "summary", "value": "Triangle from title of table goes to a next line"}, {
        "name": "description",
        "value": "!Снимок экрана 2014-08-27 в 17.00.52.png!"
    }, {"name": "created", "value": "1409144692710"}, {
        "name": "updated",
        "value": "1410978193765"
    }, {"name": "updaterName", "value": "xi-eye"}, {
        "name": "updaterFullName",
        "value": "Alexander Anisimov"
    }, {"name": "resolved", "value": "1410978193740"}, {
        "name": "reporterName",
        "value": "artemtiunov"
    }, {"name": "reporterFullName", "value": "Artem Tiunov"}, {"name": "commentsCount", "value": "0"}, {
        "name": "votes",
        "value": "0"
    }, {"name": "links", "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-7082"}]}, {
        "name": "Priority",
        "value": ["Major"],
        "valueId": ["Major"],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Obsolete"],
        "valueId": ["Obsolete"]
    }, {
        "name": "Subsystem",
        "value": ["Dashboard"],
        "valueId": [],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "attachments",
        "value": [{
            "id": "74-183146",
            "url": "https://youtrack.jetbrains.com/_persistent/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202014-08-27%20%D0%B2%2017.00.52.png?file=74-183146&v=0&c=true",
            "value": "Снимок экрана 2014-08-27 в 17.00.52.png"
        }]
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26287",
    "entityId": "25-739778",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26287"
    }, {"name": "summary", "value": "Cumulative flow widget shows incorrect right edge"}, {
        "name": "description",
        "value": "shows 1 oct, but should be 4 sep"
    }, {"name": "created", "value": "1409732146597"}, {
        "name": "updated",
        "value": "1410974043575"
    }, {"name": "updaterName", "value": "pasha"}, {
        "name": "updaterFullName",
        "value": "Pavel Nikolaev"
    }, {"name": "reporterName", "value": "vgurov"}, {
        "name": "reporterFullName",
        "value": "Vadim Gurov"
    }, {"name": "commentsCount", "value": "1"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-7082"}]
    }, {
        "name": "Priority",
        "value": ["Major"],
        "valueId": ["Major"],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Pavel Nikolaev", "value": "pasha"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-184015",
            "url": "https://youtrack.jetbrains.com/_persistent/image.png?file=74-184015&v=0&c=true",
            "value": "image.png"
        }]
    }],
    "comment": [{
        "id": "27-801970",
        "author": "Alexander.Volfman",
        "authorFullName": "Alexander Volfman",
        "issueId": "JT-26287",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Top edge is incorrect as well",
        "shownForIssueAuthor": false,
        "created": 1410966005757,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26488",
    "entityId": "25-747756",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26488"
    }, {"name": "summary", "value": "Context selector project remove works incorrectly"}, {
        "name": "description",
        "value": "str:\n# having two projects in dropdown, add second project\n# add first project\n# remove first project - second is removed and first is at its place"
    }, {"name": "created", "value": "1410967369920"}, {
        "name": "updated",
        "value": "1410970036256"
    }, {"name": "updaterName", "value": "jetbrains.teamcity"}, {
        "name": "updaterFullName",
        "value": "JetBrains TeamCity"
    }, {"name": "resolved", "value": "1410967480098"}, {
        "name": "reporterName",
        "value": "vgurov"
    }, {"name": "reporterFullName", "value": "Vadim Gurov"}, {"name": "commentsCount", "value": "0"}, {
        "name": "votes",
        "value": "0"
    }, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-22667"}]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Task"], "valueId": ["Task"]}, {
        "name": "State",
        "value": ["Fixed"],
        "valueId": ["Fixed"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Vadim Gurov", "value": "vgurov"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Fixed in builds",
        "value": ["11496"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-25574",
    "entityId": "25-716224",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "25574"
    }, {
        "name": "summary",
        "value": "Create Report link on /issues page: Contex and Search Query should be transmitted into opened Report form"
    }, {
        "name": "description",
        "value": "build 10470\n\n1. Search something\n2. on SERP click Reports, select any report\nNew report form opened, but all fields are clean.\n\nContext and Search Query should be transmitted into the form."
    }, {"name": "created", "value": "1404992416659"}, {
        "name": "updated",
        "value": "1410968934854"
    }, {"name": "updaterName", "value": "smandreev"}, {
        "name": "updaterFullName",
        "value": "Sergei Andreev"
    }, {"name": "resolved", "value": "1408532511329"}, {
        "name": "reporterName",
        "value": "smandreev"
    }, {"name": "reporterFullName", "value": "Sergei Andreev"}, {
        "name": "commentsCount",
        "value": "5"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Relates", "role": "relates to", "value": "JT-26489"}, {
            "type": "Relates",
            "role": "relates to",
            "value": "JT-26490"
        }, {"type": "Relates", "role": "relates to", "value": "JT-22721"}, {
            "type": "Subtask",
            "role": "subtask of",
            "value": "JT-22667"
        }]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Task"], "valueId": ["Task"]}, {
        "name": "State",
        "value": ["Verified"],
        "valueId": ["Verified"],
        "color": {"bg": "#339933", "fg": "white"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Alexander Volfman", "value": "Alexander.Volfman"}]
    }, {"name": "Subsystem", "value": ["Reports"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Harmonicity IX"],
        "valueId": []
    }, {"name": "Fixed in builds", "value": ["10601", "11052"], "valueId": []}, {
        "name": "Verified in build",
        "value": ["11444"],
        "valueId": []
    }, {"name": "Verified by", "value": [{"fullName": "Sergei Andreev", "value": "smandreev"}]}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [{
        "id": "27-769408",
        "author": "Alexander.Volfman",
        "authorFullName": "Alexander Volfman",
        "issueId": "JT-25574",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "folderId and q params passed to /reports/{type}/create",
        "shownForIssueAuthor": false,
        "created": 1405605770257,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-782512",
        "author": "smandreev",
        "authorFullName": "Sergei Andreev",
        "issueId": "JT-25574",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Project set as a context not transmitted into new report page.\nLooks like it is not good. Try yourself:\nhttp://youtrack.jetbrains.com/issues/JT?q=Fix+versions%3A+5.2*%2C+%7BHarmonicity*%7D\n\nShould I reopen this issue or create a new one?",
        "shownForIssueAuthor": false,
        "created": 1407858377007,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-782750",
        "author": "Alexander.Volfman",
        "authorFullName": "Alexander Volfman",
        "issueId": "JT-25574",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "It was working fine and seem to be broken now",
        "shownForIssueAuthor": false,
        "created": 1407911720274,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-786474",
        "author": "Alexander.Volfman",
        "authorFullName": "Alexander Volfman",
        "issueId": "JT-25574",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "project name(s) and id(s) passed as query params",
        "shownForIssueAuthor": false,
        "created": 1408532511673,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-802031",
        "author": "smandreev",
        "authorFullName": "Sergei Andreev",
        "issueId": "JT-25574",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Closing this one.\nCreating new as related to this issue.\nLike: JT-26490 ; JT-26489",
        "shownForIssueAuthor": false,
        "created": 1410968934864,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26490",
    "entityId": "25-747784",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26490"
    }, {
        "name": "summary",
        "value": "Search Query is not passed into \"Advanced issues per project\" (ex Create Cumulative flow)"
    }, {
        "name": "description",
        "value": "build 11444\n\n# Open [https://youtrack.jetbrains.com/issues/JT?q=%23Show-stopper+%23Critical+Fix+versions%3A+%7BHarmonicity+IX%7D%2C+6.0+%23Submitted+%23Open+%23%7BIn+Progress%7D+%23Fixed this query]\n# Create Report \"Create Cumulative flow\" \n\nNew report form \"Advanced issues per project\" will be opened with empty Query and without "
    }, {"name": "created", "value": "1410968829590"}, {
        "name": "updated",
        "value": "1410968858202"
    }, {"name": "updaterName", "value": "smandreev"}, {
        "name": "updaterFullName",
        "value": "Sergei Andreev"
    }, {"name": "reporterName", "value": "smandreev"}, {
        "name": "reporterFullName",
        "value": "Sergei Andreev"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Relates", "role": "relates to", "value": "JT-25574"}, {
            "type": "Subtask",
            "role": "subtask of",
            "value": "JT-22667"
        }]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Alexander Volfman", "value": "Alexander.Volfman"}]
    }, {"name": "Subsystem", "value": ["Reports"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Harmonicity IX"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-22667",
    "entityId": "25-635329",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "22667"
    }, {"name": "summary", "value": "New reports screen"}, {
        "name": "created",
        "value": "1385030356413"
    }, {"name": "updated", "value": "1410968402433"}, {
        "name": "updaterName",
        "value": "smandreev"
    }, {"name": "updaterFullName", "value": "Sergei Andreev"}, {
        "name": "reporterName",
        "value": "Alexander.Volfman"
    }, {"name": "reporterFullName", "value": "Alexander Volfman"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "3"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "is duplicated by", "value": "JT-13272"}, {
            "type": "Relates",
            "role": "relates to",
            "value": "JT-25414"
        }, {"type": "Relates", "role": "relates to", "value": "JT-25415"}, {
            "type": "Relates",
            "role": "relates to",
            "value": "JT-25418"
        }, {"type": "Relates", "role": "relates to", "value": "JT-25420"}, {
            "type": "Relates",
            "role": "relates to",
            "value": "JT-25423"
        }, {"type": "Relates", "role": "relates to", "value": "JT-25428"}, {
            "type": "Relates",
            "role": "relates to",
            "value": "JT-25429"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-6272"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-8884"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-11113"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-12625"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-12933"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-17669"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-22668"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-22669"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-22670"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-22684"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-22687"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-22688"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-22689"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-22691"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-22692"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-22698"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-22699"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-22708"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-22721"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-22850"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-23022"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-23130"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-23765"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-23854"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-23872"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-23913"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-23938"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-23939"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24058"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24101"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24105"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24129"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24202"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24219"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24252"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24288"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24289"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24351"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24412"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24413"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24414"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24416"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24417"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24418"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24421"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24427"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24540"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24598"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24653"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24664"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24689"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24727"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24751"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24811"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24813"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24829"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24835"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24869"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24895"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24942"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24957"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24974"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24976"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25026"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25027"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25071"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25081"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25135"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25151"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25154"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25155"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25169"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25170"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25171"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25172"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25175"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25193"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25197"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25210"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25222"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25228"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25229"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25230"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25231"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25232"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25233"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25234"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25235"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25236"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25237"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25238"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25239"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25240"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25259"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25265"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25276"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25277"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25283"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25284"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25336"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25348"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25368"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25374"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25376"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25378"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25379"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25380"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25381"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25382"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25383"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25384"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25385"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25386"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25387"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25388"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25389"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25390"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25391"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25399"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25411"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25414"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25415"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25418"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25419"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25420"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25423"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25427"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25428"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25429"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25430"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25432"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25434"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25438"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25441"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25448"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25449"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25450"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25453"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25455"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25456"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25460"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25461"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25463"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25464"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25465"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25494"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25496"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25504"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25519"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25535"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25540"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25549"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25550"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25561"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25574"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25575"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25576"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25579"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25580"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25596"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25617"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25619"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25621"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25645"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25646"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25650"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25663"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25675"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25677"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25686"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25708"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25732"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25766"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25767"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25770"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25771"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25782"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25784"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25788"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25791"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25808"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25863"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25866"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25867"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25869"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25871"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25882"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25883"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25885"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25899"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25900"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25901"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25902"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25908"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25911"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25933"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25945"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25947"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25963"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25965"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25968"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25974"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25975"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25976"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25996"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25997"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26011"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26023"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26032"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26027"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26033"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26035"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26036"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26054"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26060"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26065"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26072"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26092"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26093"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26095"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26100"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26102"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26103"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26108"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26109"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26110"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26134"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26153"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26154"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26155"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26156"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26160"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26162"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26164"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26166"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26167"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26170"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26185"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26196"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26197"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26199"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26205"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26206"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26207"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26209"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26212"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26225"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26233"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26235"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26241"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26242"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26243"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26249"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26262"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26263"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26273"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26280"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26293"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26294"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26307"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26317"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26328"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26329"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26330"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26332"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26333"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26340"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26343"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26344"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26345"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26346"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26357"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26371"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26377"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26378"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26381"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26383"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26387"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26390"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26397"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26398"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26404"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26406"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26407"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26446"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26488"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26489"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26490"
        }]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Feature"], "valueId": ["Feature"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Harmonicity IX"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26489",
    "entityId": "25-747774",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26489"
    }, {
        "name": "summary",
        "value": "Names of Reports in drop-down list on search results page should be equals to names on Reports page"
    }, {
        "name": "description",
        "value": "build 11444\n\nCurrently they are obsolete\n!image.png!\nvs\n!image2.png!"
    }, {"name": "created", "value": "1410968237401"}, {
        "name": "updated",
        "value": "1410968237401"
    }, {"name": "updaterName", "value": "smandreev"}, {
        "name": "updaterFullName",
        "value": "Sergei Andreev"
    }, {"name": "reporterName", "value": "smandreev"}, {
        "name": "reporterFullName",
        "value": "Sergei Andreev"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Relates", "role": "relates to", "value": "JT-25574"}, {
            "type": "Subtask",
            "role": "subtask of",
            "value": "JT-22667"
        }]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Alexander Volfman", "value": "Alexander.Volfman"}]
    }, {"name": "Subsystem", "value": ["Reports"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Harmonicity IX"],
        "valueId": []
    }, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-186368",
            "url": "https://youtrack.jetbrains.com/_persistent/image.png?file=74-186368&v=0&c=true",
            "value": "image.png"
        }, {
            "id": "74-186369",
            "url": "https://youtrack.jetbrains.com/_persistent/image2.png?file=74-186369&v=0&c=true",
            "value": "image2.png"
        }]
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-25689",
    "entityId": "25-719331",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "25689"
    }, {
        "name": "summary",
        "value": "java.lang.IllegalArgumentException: Can't create path from string [jetbrains/youtrack/common/css/Ring.css\" rel=\"stylesheet\" type=\"text/css]"
    }, {
        "name": "description",
        "value": "I am seeing regular occurrences of this exception in the youtrack.log.  Neither of the users who seem to be triggering the exception have noticed any issues, I browsed around myself on their machines and everything looks ok.\n\n18 Jul 2014 10:32:41,947 WARN  [ResponseFactory               ] [http-nio-443-exec-42                              ] [ojavier@10.202.157.93] Error accessing resource\njava.lang.IllegalArgumentException: Can't create path from string [jetbrains/youtrack/common/css/Ring.css\" rel=\"stylesheet\" type=\"text/css]\n\tat jetbrains.mps.webr.runtime.uri.Path.newPath(Path.java:58)\n\tat jetbrains.mps.webr.runtime.uri.hash.HashFileNameUtil.getPath(HashFileNameUtil.java:71)\n\tat jetbrains.mps.webr.runtime.requestProcessor.ResponseFactory.getResourceResponse(ResponseFactory.java:114)\n\tat jetbrains.mps.webr.runtime.requestProcessor.ClasspathRequestProcessor.processRequest(ClasspathRequestProcessor.java:32)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.processRequest(MainServlet.java:252)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:138)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:620)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:727)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:303)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:220)\n\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:122)\n\tat org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:501)\n\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:170)\n\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:98)\n\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:116)\n\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:408)\n\tat org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1040)\n\tat org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:607)\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1721)\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.run(NioEndpoint.java:1679)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1145)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:615)\n\tat java.lang.Thread.run(Thread.java:744)\n18 Jul 2014 10:32:41,947 ERROR [ResponseFactory               ] [http-nio-443-exec-42                              ] [ojavier@10.202.157.93] Resource [/jetbrains/youtrack/common/css/Ring.css\" rel=\"stylesheet\" type=\"text/css] was not found\n\n"
    }, {"name": "created", "value": "1405705253377"}, {
        "name": "updated",
        "value": "1410966618889"
    }, {"name": "updaterName", "value": "sven"}, {
        "name": "updaterFullName",
        "value": "Sven Kloppenburg"
    }, {"name": "reporterName", "value": "sbryden"}, {
        "name": "reporterFullName",
        "value": "Steve Bryden"
    }, {"name": "commentsCount", "value": "1"}, {"name": "votes", "value": "1"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Alexander Anisimov", "value": "xi-eye"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Affected versions", "value": ["5.2"], "valueId": []}, {
        "name": "Browser",
        "value": ["Chrome 40.x", "Firefox 35.x"],
        "valueId": ["Chrome 40.x", "Firefox 35.x"]
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [{
        "id": "27-801982",
        "author": "sven",
        "authorFullName": "Sven Kloppenburg",
        "issueId": "JT-25689",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "same here.",
        "shownForIssueAuthor": false,
        "created": 1410966618907,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26296",
    "entityId": "25-740168",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26296"
    }, {"name": "summary", "value": "Notifications for mentions contains corrupted urls"}, {
        "name": "description",
        "value": "When mentioning someone in a ticket, a notification by email is sent to the user, as expected.\n\nHowever, for some reasons I can't explain, all these notifications contains a corrupted url (a trailing space, converted as '%20', at the end of the url).\nSo clicking on that url brings users to a 404 page.\nBy simply removing that '%20' at the end of the url, user can see the right ticket.\n\nHowever, not all users are skilled enough to do that, so it would be nice to have it fixed or to get some help to fix this on my side.\n\nThanks."
    }, {"name": "created", "value": "1409757408588"}, {
        "name": "updated",
        "value": "1410966088162"
    }, {"name": "updaterName", "value": "andrey.tigay"}, {
        "name": "updaterFullName",
        "value": "Andrey Tigay"
    }, {"name": "reporterName", "value": "Andrea_Sciamanna"}, {
        "name": "reporterFullName",
        "value": "Andrea Sciamanna"
    }, {"name": "commentsCount", "value": "3"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Pavel Nikolaev", "value": "pasha"}]}, {
        "name": "Subsystem",
        "value": ["Notifications"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [{
        "id": "27-801475",
        "author": "sciamannikoo",
        "authorFullName": "Andrea Sciamanna",
        "issueId": "JT-26296",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Anyone? This issue is becoming quite annoying. \n\nI noticed that even mention notifications, coming from youtrack.jetbrains.com have the same issues.",
        "shownForIssueAuthor": false,
        "created": 1410941508250,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-801583",
        "author": "andrey.tigay",
        "authorFullName": "Andrey Tigay",
        "issueId": "JT-26296",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Hello @Andrea_Sciamanna \n\nCould you please attach these notifications with broken link you've received from youtrack.jetbrains.com?",
        "shownForIssueAuthor": false,
        "created": 1410947899792,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-801694",
        "author": "andrey.tigay",
        "authorFullName": "Andrey Tigay",
        "issueId": "JT-26296",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "@Andrea_Sciamanna thanks for notification. However, attachment contains notification on comment only. Could you please provide me with the second one? \n",
        "shownForIssueAuthor": false,
        "created": 1410952931540,
        "updated": 1410947899732,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26477",
    "entityId": "25-747407",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26477"
    }, {
        "name": "summary",
        "value": "Error while rest request processing org.eclipse.jetty.io.EofException"
    }, {
        "name": "description",
        "value": "YT Build #11486\nreproduce on http://youtrack-staging.labs.intellij.net/\n1. Goto http://youtrack-staging.labs.intellij.net/ring and disable integration with hub\n2. Update several users in hub\n3. Goto http://youtrack-staging.labs.intellij.net/ring and enable integration with hub\n4. Schedule \"sync now\"\n\nresult: yt won't get events from hub\n17 Sep 2014 13:50:06,709 ERROR [ltRestRequestHandler] [qtp1940079128-92                                  ] [root@172.20.240.233] Error while rest request processing\norg.eclipse.jetty.io.EofException\n\tat org.eclipse.jetty.http.HttpGenerator.flushBuffer(HttpGenerator.java:914)\n\tat org.eclipse.jetty.http.AbstractGenerator.flush(AbstractGenerator.java:443)\n\tat org.eclipse.jetty.server.HttpOutput.flush(HttpOutput.java:100)\n\tat org.eclipse.jetty.server.AbstractHttpConnection$Output.flush(AbstractHttpConnection.java:1078)\n\tat com.sun.jersey.spi.container.servlet.WebComponent$Writer.flush(WebComponent.java:313)\n\tat com.sun.jersey.spi.container.ContainerResponse$CommittingOutputStream.flush(ContainerResponse.java:145)\n\tat com.fasterxml.jackson.core.json.UTF8JsonGenerator.close(UTF8JsonGenerator.java:1086)\n\tat com.fasterxml.jackson.jaxrs.base.ProviderBase.writeTo(ProviderBase.java:544)\n\tat com.sun.jersey.spi.container.ContainerResponse.write(ContainerResponse.java:306)\n\tat com.sun.jersey.server.impl.application.WebApplicationImpl._handleRequest(WebApplicationImpl.java:1451)\n\tat com.sun.jersey.server.impl.application.WebApplicationImpl.handleRequest(WebApplicationImpl.java:1363)\n\tat com.sun.jersey.server.impl.application.WebApplicationImpl.handleRequest(WebApplicationImpl.java:1353)\n\tat com.sun.jersey.spi.container.servlet.WebComponent.service(WebComponent.java:414)\n\tat jetbrains.mps.webr.rpc.rest.provider.misc.DefaultRestRequestHandler.handle(DefaultRestRequestHandler.java:181)\n\tat jetbrains.mps.webr.runtime.requestProcessor.RestRequestProcessor.processRequest(RestRequestProcessor.java:47)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.processRequest(MainServlet.java:252)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:138)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:734)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:847)\n\tat org.eclipse.jetty.servlet.ServletHolder.handle(ServletHolder.java:648)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1336)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:453)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:137)\n\tat org.eclipse.jetty.security.SecurityHandler.handle(SecurityHandler.java:559)\n\tat org.eclipse.jetty.server.session.SessionHandler.doHandle(SessionHandler.java:231)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1072)\n\tat org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:382)\n\tat org.eclipse.jetty.server.session.SessionHandler.doScope(SessionHandler.java:193)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1006)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:135)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:116)\n\tat org.eclipse.jetty.server.Server.handle(Server.java:365)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.handleRequest(AbstractHttpConnection.java:485)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.headerComplete(AbstractHttpConnection.java:926)\n\tat org.eclipse.jetty.server.AbstractHttpConnection$RequestHandler.headerComplete(AbstractHttpConnection.java:988)\n\tat org.eclipse.jetty.http.HttpParser.parseNext(HttpParser.java:635)\n\tat org.eclipse.jetty.http.HttpParser.parseAvailable(HttpParser.java:235)\n\tat org.eclipse.jetty.server.AsyncHttpConnection.handle(AsyncHttpConnection.java:82)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint.handle(SelectChannelEndPoint.java:627)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint$1.run(SelectChannelEndPoint.java:51)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:608)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool$3.run(QueuedThreadPool.java:543)\n\tat java.lang.Thread.run(Thread.java:744)\nCaused by: java.io.IOException: Broken pipe\n\tat sun.nio.ch.FileDispatcherImpl.$$YJP$$write0(Native Method)\n\tat sun.nio.ch.FileDispatcherImpl.write0(FileDispatcherImpl.java)\n\tat sun.nio.ch.SocketDispatcher.write(SocketDispatcher.java:47)\n\tat sun.nio.ch.IOUtil.writeFromNativeBuffer(IOUtil.java:93)\n\tat sun.nio.ch.IOUtil.write(IOUtil.java:51)\n\tat sun.nio.ch.SocketChannelImpl.write(SocketChannelImpl.java:466)\n\tat org.eclipse.jetty.io.nio.ChannelEndPoint.flush(ChannelEndPoint.java:293)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint.flush(SelectChannelEndPoint.java:361)\n\tat org.eclipse.jetty.http.HttpGenerator.flushBuffer(HttpGenerator.java:850)\n\t... 49 more"
    }, {"name": "created", "value": "1410947975251"}, {
        "name": "updated",
        "value": "1410964966725"
    }, {"name": "updaterName", "value": "Mikhail.Kapusta"}, {
        "name": "updaterFullName",
        "value": "Mikhail Kapusta"
    }, {"name": "resolved", "value": "1410954692224"}, {
        "name": "reporterName",
        "value": "Mikhail.Kapusta"
    }, {"name": "reporterFullName", "value": "Mikhail Kapusta"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-21844"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Fixed"],
        "valueId": ["Fixed"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Evgeny Naumenko", "value": "Evgeny_Naumenko"}]
    }, {
        "name": "Subsystem",
        "value": ["HUB & Ring"],
        "valueId": [],
        "color": {"bg": "#ccffff", "fg": "#000"}
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Verified by",
        "value": [{"fullName": "Mikhail Kapusta", "value": "Mikhail.Kapusta"}]
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-15862",
    "entityId": "25-457807",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "15862"
    }, {"name": "summary", "value": "Show Vote Count in Agile Board"}, {
        "name": "description",
        "value": "It would be helpful if there was an option to show the vote count for an issue in the Agile board."
    }, {"name": "created", "value": "1343138704864"}, {
        "name": "updated",
        "value": "1410964603533"
    }, {"name": "updaterName", "value": "artemtiunov"}, {
        "name": "updaterFullName",
        "value": "Artem Tiunov"
    }, {"name": "resolved", "value": "1410964603517"}, {
        "name": "reporterName",
        "value": "pltaylor"
    }, {"name": "reporterFullName", "value": "Perry Taylor"}, {"name": "commentsCount", "value": "1"}, {
        "name": "votes",
        "value": "1"
    }, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-20316"}]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Feature"], "valueId": ["Feature"]}, {
        "name": "State",
        "value": ["Invalid"],
        "valueId": ["Invalid"]
    }, {"name": "Assignee", "value": [{"fullName": "Artem Tiunov", "value": "artemtiunov"}]}, {
        "name": "Subsystem",
        "value": ["Agile Board"],
        "valueId": [],
        "color": {"bg": "#d9ffc8", "fg": "#000"}
    }, {"name": "Fix versions", "value": ["Backlog"], "valueId": []}, {
        "name": "Affected versions",
        "value": ["4.0.1"],
        "valueId": []
    }],
    "comment": [{
        "id": "27-801940",
        "author": "artemtiunov",
        "authorFullName": "Artem Tiunov",
        "issueId": "JT-15862",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "I do not think that this control should be on the Agile Board",
        "shownForIssueAuthor": false,
        "created": 1410964597297,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-21040",
    "entityId": "25-587788",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "21040"
    }, {
        "name": "summary",
        "value": "\"Show fields pane on the left\" is implemented as a stopgap"
    }, {
        "name": "description",
        "value": "The pane is moved mechanically to the left, it's not aligned to anything, looks bad."
    }, {"name": "created", "value": "1374675951484"}, {
        "name": "updated",
        "value": "1410964491236"
    }, {"name": "updaterName", "value": "artemtiunov"}, {
        "name": "updaterFullName",
        "value": "Artem Tiunov"
    }, {"name": "resolved", "value": "1410964491210"}, {
        "name": "reporterName",
        "value": "Leonid.Khachaturov"
    }, {"name": "reporterFullName", "value": "Leonid Khachaturov"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Major"],
        "valueId": ["Major"],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Obsolete"],
        "valueId": ["Obsolete"]
    }, {"name": "Assignee", "value": [{"fullName": "Artem Tiunov", "value": "artemtiunov"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Affected versions", "value": ["5.0"], "valueId": []}, {
        "name": "Severity",
        "value": ["High"],
        "valueId": ["High"],
        "color": {"bg": "#8c1801", "fg": "white"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-128503",
            "url": "https://youtrack.jetbrains.com/_persistent/Screen%20Shot%202013-07-24%20at%204.23.54%20PM.png?file=74-128503&v=0&c=true",
            "value": "Screen Shot 2013-07-24 at 4.23.54 PM.png"
        }]
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-21844",
    "entityId": "25-612016",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "21844"
    }, {"name": "summary", "value": "Complete hub integration"}, {
        "name": "created",
        "value": "1379422080389"
    }, {"name": "updated", "value": "1410964442231"}, {
        "name": "updaterName",
        "value": "Evgeny_Naumenko"
    }, {"name": "updaterFullName", "value": "Evgeny Naumenko"}, {
        "name": "reporterName",
        "value": "pavel.nikitin"
    }, {"name": "reporterFullName", "value": "Pavel Nikitin"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Relates", "role": "relates to", "value": "JT-26136"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-21845"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-21846"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-21857"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-21967"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24725"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24740"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24742"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24743"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24762"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24763"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24771"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24808"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24809"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24810"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24836"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24837"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24857"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24865"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24866"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24872"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24889"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24932"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24933"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24943"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24944"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24960"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25050"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25103"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25107"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25160"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25212"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25225"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25253"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25275"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25306"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25316"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25505"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25510"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25523"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25531"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25573"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25588"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25639"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25641"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25647"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25648"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25655"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25669"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25723"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25750"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25756"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25790"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25818"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25821"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25824"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25848"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25922"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25936"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25944"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25971"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25972"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25994"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26022"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26074"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26120"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26126"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26142"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26220"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26256"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26258"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26382"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26442"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26460"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26477"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26483"
        }]
    }, {
        "name": "Priority",
        "value": ["Major"],
        "valueId": ["Major"],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Feature"], "valueId": ["Feature"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Evgeny Naumenko", "value": "Evgeny_Naumenko"}]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Harmonicity IX"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26460",
    "entityId": "25-746922",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26460"
    }, {
        "name": "summary",
        "value": "After YouTrack export to Hub a number of OpenID providers appears in Hub"
    }, {
        "name": "description",
        "value": "Actually only Google and Yandex OpenID export is meaningful."
    }, {"name": "created", "value": "1410873658572"}, {
        "name": "updated",
        "value": "1410964442222"
    }, {"name": "updaterName", "value": "Evgeny_Naumenko"}, {
        "name": "updaterFullName",
        "value": "Evgeny Naumenko"
    }, {"name": "reporterName", "value": "mazine"}, {
        "name": "reporterFullName",
        "value": "Maxim Mazin"
    }, {"name": "commentsCount", "value": "3"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-21844"}]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Evgeny Naumenko", "value": "Evgeny_Naumenko"}]
    }, {
        "name": "Subsystem",
        "value": ["HUB & Ring"],
        "valueId": [],
        "color": {"bg": "#ccffff", "fg": "#000"}
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [{
        "id": "27-801167",
        "author": "Evgeny_Naumenko",
        "authorFullName": "Evgeny Naumenko",
        "issueId": "JT-26460",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Why? There are plenty of OpenID providers all around (AOL, eBay, etc)",
        "shownForIssueAuthor": false,
        "created": 1410882428387,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-801822",
        "author": "mazine",
        "authorFullName": "Maxim Mazin",
        "issueId": "JT-26460",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Hub supports only OpenID 2.0. It means that the majority of exported OpenID providers that are exported won't be supported. \n\nI guess it's better to explore what OpenID 2.0 providers are actually used right now at youtrack.jetbrains.com ",
        "shownForIssueAuthor": false,
        "created": 1410959567628,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-801839",
        "author": "Evgeny_Naumenko",
        "authorFullName": "Evgeny Naumenko",
        "issueId": "JT-26460",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Makes sense to me, thanks.",
        "shownForIssueAuthor": false,
        "created": 1410960195399,
        "updated": 1410882428336,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26073",
    "entityId": "25-731209",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26073"
    }, {"name": "summary", "value": "YT + HUB admin menu issues"}, {
        "name": "description",
        "value": "# No link to Auth Modules from YT \"More settings\" menu. ETA: Add this link to the right, as it is in Hub admin menu.\n# --Links from HUB to YT are broken.--\n# --Hub menu bar has two links \"Issues\". Neither of them works.--\n# --Icon and favicon in HUB menu are wrong.--\n# --\"Ring Integration\" in YT shouldn't exist in case of Embedded HUB.--\n# Add link to profile in user dropdown."
    }, {"name": "created", "value": "1408447536674"}, {
        "name": "updated",
        "value": "1410964175350"
    }, {"name": "updaterName", "value": "mariyafomkina"}, {
        "name": "updaterFullName",
        "value": "Mariya Davydova"
    }, {"name": "reporterName", "value": "Anna.Zhdan"}, {
        "name": "reporterFullName",
        "value": "Anna Zhdan"
    }, {"name": "commentsCount", "value": "1"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Depend", "role": "depends on", "value": "JT-26431"}, {
            "type": "Subtask",
            "role": "subtask of",
            "value": "JT-21857"
        }]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["In Progress"],
        "valueId": ["In Progress"],
        "color": {"bg": "#00a1b4", "fg": "white"}
    }, {"name": "Assignee", "value": [{"fullName": "Mariya Davydova", "value": "mariyafomkina"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [{
        "id": "27-794349",
        "author": "xi-eye",
        "authorFullName": "Alexander Anisimov",
        "issueId": "JT-26073",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Looking forward for HUB 0.6 that contains top menu with user dropdown from the box ",
        "shownForIssueAuthor": false,
        "created": 1409815812542,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-25997",
    "entityId": "25-727666",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "25997"
    }, {
        "name": "summary",
        "value": "Tootip with issues number appeares too much from the right"
    }, {
        "name": "description",
        "value": "build 10878\n\nIt already not good if I point cursor here:\n!screenshot1.png!\n\nBut if I move cursor to next category from the right tooltip appeares out of visibiolity area\n!screenshot2.png!"
    }, {"name": "created", "value": "1407862291838"}, {
        "name": "updated",
        "value": "1410964168392"
    }, {"name": "updaterName", "value": "smandreev"}, {
        "name": "updaterFullName",
        "value": "Sergei Andreev"
    }, {"name": "resolved", "value": "1408021340678"}, {
        "name": "reporterName",
        "value": "smandreev"
    }, {"name": "reporterFullName", "value": "Sergei Andreev"}, {
        "name": "commentsCount",
        "value": "1"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-22667"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {
        "name": "Type",
        "value": ["Cosmetics"],
        "valueId": ["Cosmetics"],
        "color": {"bg": "#d9ffc8", "fg": "#000"}
    }, {
        "name": "State",
        "value": ["Verified"],
        "valueId": ["Verified"],
        "color": {"bg": "#339933", "fg": "white"}
    }, {"name": "Assignee", "value": [{"fullName": "Alexander Anisimov", "value": "xi-eye"}]}, {
        "name": "Subsystem",
        "value": ["Reports"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Fixed in builds",
        "value": ["10978"],
        "valueId": []
    }, {"name": "Verified in build", "value": ["11444"], "valueId": []}, {
        "name": "Verified by",
        "value": [{"fullName": "Sergei Andreev", "value": "smandreev"}]
    }, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-181112",
            "url": "https://youtrack.jetbrains.com/_persistent/screenshot1.png?file=74-181112&v=0&c=true",
            "value": "screenshot1.png"
        }, {
            "id": "74-181113",
            "url": "https://youtrack.jetbrains.com/_persistent/screenshot2.png?file=74-181113&v=0&c=true",
            "value": "screenshot2.png"
        }]
    }],
    "comment": [{
        "id": "27-783635",
        "author": "pavel.nikitin",
        "authorFullName": "Pavel Nikitin",
        "issueId": "JT-25997",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "We need CSS magic healing.",
        "shownForIssueAuthor": false,
        "created": 1408017405920,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-25453",
    "entityId": "25-712941",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "25453"
    }, {
        "name": "summary",
        "value": "Report can be replaced with another one after calculation is done"
    }, {
        "name": "description",
        "value": "STR:\n# Open a State Transition report and click Recalculate icon.\n# Immediately switch to Another State Transition report (while the first one is being calculated)."
    }, {"name": "created", "value": "1404298017678"}, {
        "name": "updated",
        "value": "1410963996136"
    }, {"name": "updaterName", "value": "smandreev"}, {
        "name": "updaterFullName",
        "value": "Sergei Andreev"
    }, {"name": "resolved", "value": "1404979485820"}, {
        "name": "reporterName",
        "value": "alexander.buturlinov"
    }, {"name": "reporterFullName", "value": "Alexander Buturlinov"}, {
        "name": "commentsCount",
        "value": "1"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-22667"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Verified"],
        "valueId": ["Verified"],
        "color": {"bg": "#339933", "fg": "white"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Alexander Volfman", "value": "Alexander.Volfman"}]
    }, {"name": "Subsystem", "value": ["Reports"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Harmonicity IX"],
        "valueId": []
    }, {"name": "Fixed in builds", "value": ["10482"], "valueId": []}, {
        "name": "Verified in build",
        "value": ["11444"],
        "valueId": []
    }, {"name": "Verified by", "value": [{"fullName": "Sergei Andreev", "value": "smandreev"}]}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [{
        "id": "27-765193",
        "author": "Alexander.Volfman",
        "authorFullName": "Alexander Volfman",
        "issueId": "JT-25453",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "moved report rendering initiation into angular watch",
        "shownForIssueAuthor": false,
        "created": 1404979488587,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26137",
    "entityId": "25-733455",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26137"
    }, {"name": "summary", "value": "Handle baseURL changes for dashboard"}, {
        "name": "description",
        "value": "the cause is baseurl that is build as follows:\n{code}\nvar base = document.getElementsByTagName('base')[0].href;\n{code}\n\nThis code returns full current url with context.\nTo get relative url one can use\n{code}\nvar base = $(document.getElementsByTagName('base')[0]).attr('href');\n{code}\n"
    }, {"name": "created", "value": "1408706956247"}, {
        "name": "updated",
        "value": "1410963217491"
    }, {"name": "updaterName", "value": "jetbrains.teamcity"}, {
        "name": "updaterFullName",
        "value": "JetBrains TeamCity"
    }, {"name": "resolved", "value": "1410954868730"}, {
        "name": "reporterName",
        "value": "Mikhail.Kapusta"
    }, {"name": "reporterFullName", "value": "Mikhail Kapusta"}, {
        "name": "commentsCount",
        "value": "3"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Depend", "role": "depends on", "value": "JT-26434"}, {
            "type": "Subtask",
            "role": "subtask of",
            "value": "JT-7082"
        }]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Task"], "valueId": ["Task"]}, {
        "name": "State",
        "value": ["Fixed"],
        "valueId": ["Fixed"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Vadim Gurov", "value": "vgurov"}]}, {
        "name": "Subsystem",
        "value": ["Dashboard"],
        "valueId": [],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Fixed in builds",
        "value": ["11493"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [{
        "id": "27-793252",
        "author": "vgurov",
        "authorFullName": "Vadim Gurov",
        "issueId": "JT-26137",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "@Mikhail.Kapusta what does this mean? ",
        "shownForIssueAuthor": false,
        "created": 1409665745507,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-798131",
        "author": "Leonid.Stryuk",
        "authorFullName": "Leonid Stryuk",
        "issueId": "JT-26137",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Youtrack baseUrl is stored in all widgets configs. ",
        "shownForIssueAuthor": false,
        "created": 1410363440954,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-798216",
        "author": "vgurov",
        "authorFullName": "Vadim Gurov",
        "issueId": "JT-26137",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "So it's better not to store it there.",
        "shownForIssueAuthor": false,
        "created": 1410374353517,
        "updated": 1410374359165,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26289",
    "entityId": "25-739803",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26289"
    }, {"name": "summary", "value": "Issues 2d distribution widget bars layout has shifted"}, {
        "name": "created",
        "value": "1409734151988"
    }, {"name": "updated", "value": "1410963217079"}, {
        "name": "updaterName",
        "value": "jetbrains.teamcity"
    }, {"name": "updaterFullName", "value": "JetBrains TeamCity"}, {
        "name": "resolved",
        "value": "1410959075733"
    }, {"name": "reporterName", "value": "vgurov"}, {
        "name": "reporterFullName",
        "value": "Vadim Gurov"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-7082"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Fixed"],
        "valueId": ["Fixed"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Pavel Nikolaev", "value": "pasha"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Fixed in builds",
        "value": ["11493"],
        "valueId": []
    }, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-184029",
            "url": "https://youtrack.jetbrains.com/_persistent/image.png?file=74-184029&v=0&c=true",
            "value": "image.png"
        }]
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-13992",
    "entityId": "25-409807",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "13992"
    }, {
        "name": "summary",
        "value": "Visially facilitate perception of complex subtasks hierarchy "
    }, {
        "name": "description",
        "value": "For large substaks tree it's quite hard visually understand what issue is sutask of what parent. \n\nProvide a tree contour to connect subtask with siblings and parent.\nE.g. it can appear just on mouse hover or make it transparent in inverse ratio to distance from mouse cursor to subtask.\n\nLook at working example on habrahabr comments."
    }, {"name": "created", "value": "1335703707467"}, {
        "name": "updated",
        "value": "1410962754069"
    }, {"name": "updaterName", "value": "artemtiunov"}, {
        "name": "updaterFullName",
        "value": "Artem Tiunov"
    }, {"name": "reporterName", "value": "dima"}, {
        "name": "reporterFullName",
        "value": "Dmitry Krasilschikov"
    }, {"name": "commentsCount", "value": "1"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Relates", "role": "relates to", "value": "JT-571"}]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Feature"], "valueId": ["Feature"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Alexander Anisimov", "value": "xi-eye"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Backlog"], "valueId": []}, {
        "name": "Affected versions",
        "value": ["4.0"],
        "valueId": []
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-73539",
            "url": "https://youtrack.jetbrains.com/_persistent/screenshot1.png?file=74-73539&v=2&c=true",
            "value": "screenshot1.png"
        }, {
            "id": "74-186338",
            "url": "https://youtrack.jetbrains.com/_persistent/list4.png?file=74-186338&v=0&c=true",
            "value": "list4.png"
        }]
    }],
    "comment": [{
        "id": "27-801886",
        "author": "artemtiunov",
        "authorFullName": "Artem Tiunov",
        "issueId": "JT-13992",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Yes, need to add the \"crutches\":\n\n!list4.png!",
        "shownForIssueAuthor": false,
        "created": 1410962696148,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26172",
    "entityId": "25-735121",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26172"
    }, {"name": "summary", "value": "Test issue has no comments"}, {
        "name": "description",
        "value": "java.lang.IllegalArgumentException: Test issue has no comments\n\tat jetbrains.youtrack.mailbox.notifications.MailboxSubmittedCommentNotification.createTestData(MailboxSubmittedCommentNotification.java:24)\n\tat jetbrains.youtrack.notifications.ui.TestDataBuilder.createNotificationTestData(TestDataBuilder.java:74)\n\tat jetbrains.youtrack.notifications.ui.EmailTemplateEditor_HtmlTemplateComponent$10.invoke(EmailTemplateEditor_HtmlTemplateComponent.java:504)\n\tat jetbrains.youtrack.notifications.ui.EmailTemplateEditor_HtmlTemplateComponent$10.invoke(EmailTemplateEditor_HtmlTemplateComponent.java:502)\n\tat jetbrains.youtrack.notifications.ui.TemplatePreview_HtmlTemplateComponent.process(TemplatePreview_HtmlTemplateComponent.java:443)\n\tat jetbrains.youtrack.notifications.ui.TemplatePreview_HtmlTemplateComponent.access$100(TemplatePreview_HtmlTemplateComponent.java:23)\n\tat jetbrains.youtrack.notifications.ui.TemplatePreview_HtmlTemplateComponent$4.invoke(TemplatePreview_HtmlTemplateComponent.java:449)\n\tat jetbrains.youtrack.notifications.ui.TemplatePreview_HtmlTemplateComponent$4.invoke(TemplatePreview_HtmlTemplateComponent.java:447)\n\tat jetbrains.youtrack.notifications.ui.TestMessage_HtmlTemplateComponent.sendTestEmail(TestMessage_HtmlTemplateComponent.java:453)\n\tat jetbrains.youtrack.notifications.ui.TestMessage_HtmlTemplateComponent.sendTestMessage(TestMessage_HtmlTemplateComponent.java:443)\n\tat jetbrains.youtrack.notifications.ui.TestMessage_HtmlTemplateComponent$3.handle(TestMessage_HtmlTemplateComponent.java:79)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.doNewHandleEvent(TemplateComponent.java:604)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.newHandleByEventHandlers(TemplateComponent.java:584)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.newHandleByEventHandlers(TemplateComponent.java:582)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.newHandleByEventHandlers(TemplateComponent.java:582)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.newHandleByEventHandlers(TemplateComponent.java:582)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.newHandleByEventHandlers(TemplateComponent.java:582)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.newHandleEvent(TemplateComponent.java:572)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateActionController.handleEventImpl(TemplateActionController.java:138)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateActionController.handleEvent(TemplateActionController.java:120)\n\tat jetbrains.mps.webr.runtime.requestProcessor.EventRequestProcessor.processRequest(EventRequestProcessor.java:75)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.processRequest(MainServlet.java:252)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:138)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doPost(MainServlet.java:216)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:646)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:727)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:303)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)\n\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:220)\n\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:122)\n\tat org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:501)\n\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:170)\n\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:98)\n\tat org.apache.catalina.valves.AccessLogValve.invoke(AccessLogValve.java:950)\n\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:116)\n\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:408)\n\tat org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1040)\n\tat org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:607)\n\tat org.apache.tomcat.util.net.AprEndpoint$SocketProcessor.doRun(AprEndpoint.java:2441)\n\tat org.apache.tomcat.util.net.AprEndpoint$SocketProcessor.run(AprEndpoint.java:2430)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\n\tat java.lang.Thread.run(Unknown Source)\n\n\n===Environment details===\nhost: 192.168.1.166\nbase url: http://192.168.1.101:8080\nversion: 5.2.4\nbuild: 8815 [13-Aug-2014 15:13] \njava.version: 1.7.0_51\njava.vendor: Oracle Corporation\njava.vm.specification.version: 1.7\njava.vm.specification.vendor: Oracle Corporation\njava.vm.specification.name: Java Virtual Machine Specification\njava.vm.version: 24.51-b03\njava.vm.vendor: Oracle Corporation\njava.vm.name: Java HotSpot(TM) Client VM\njava.specification.version: 1.7\njava.specification.vendor: Oracle Corporation\njava.specification.name: Java Platform API Specification\njava.class.version: 51.0\nos.name: Windows 7\nos.arch: x86\nos.version: 6.1\nMax memory: 494 MB (518979584 bytes)\nFree memory: 105 MB (110119584 bytes)\nTotal memory: 380 MB (399298560 bytes)\nAvailable processors: 4\nThrown at: Monday, August 25, 2014 2:27:37 PM EDT"
    }, {"name": "created", "value": "1408991293887"}, {
        "name": "updated",
        "value": "1410962617064"
    }, {"name": "updaterName", "value": "smandreev"}, {
        "name": "updaterFullName",
        "value": "Sergei Andreev"
    }, {"name": "resolved", "value": "1410789261715"}, {
        "name": "reporterName",
        "value": "app_exception"
    }, {"name": "reporterFullName", "value": "Exception Robot"}, {
        "name": "commentsCount",
        "value": "3"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "is duplicated by", "value": "JT-24847"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Verified"],
        "valueId": ["Verified"],
        "color": {"bg": "#339933", "fg": "white"}
    }, {"name": "Assignee", "value": [{"fullName": "Pavel Nikolaev", "value": "pasha"}]}, {
        "name": "Subsystem",
        "value": ["Notifications"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Fixed in builds",
        "value": ["11444"],
        "valueId": []
    }, {"name": "Affected versions", "value": ["5.2.4"], "valueId": []}, {
        "name": "OS",
        "value": ["Windows 7"],
        "valueId": ["Windows 7"]
    }, {"name": "Verified in build", "value": ["11444"], "valueId": []}, {
        "name": "Verified by",
        "value": [{"fullName": "Sergei Andreev", "value": "smandreev"}]
    }, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-186336",
            "url": "https://youtrack.jetbrains.com/_persistent/image.png?file=74-186336&v=0&c=true",
            "value": "image.png"
        }]
    }],
    "comment": [{
        "id": "27-794666",
        "author": "mariyafomkina",
        "authorFullName": "Mariya Davydova",
        "issueId": "JT-26172",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "This is not a problem of MI, but of notification templates and test issue used in these templates.",
        "shownForIssueAuthor": false,
        "created": 1409833703760,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-799367",
        "author": "pasha",
        "authorFullName": "Pavel Nikolaev",
        "issueId": "JT-26172",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "STR: \n#enable email notifications\n#open mailbox notification editing\n#choose issue with no comments in Preview Settings\n#send test email",
        "shownForIssueAuthor": false,
        "created": 1410526434994,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-801882",
        "author": "smandreev",
        "authorFullName": "Sergei Andreev",
        "issueId": "JT-26172",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "!image.png!",
        "shownForIssueAuthor": false,
        "created": 1410962606900,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-14037",
    "entityId": "25-411473",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "14037"
    }, {
        "name": "summary",
        "value": "ScrumBoard cards: Sometimes 'No value' looks like part of text."
    }, {
        "name": "description",
        "value": "Scrum build 2879\n\nI am not real designer, so I can not suggest what to do, but sometimes it is hard for me to separate these text fields. Probably this is because of low brightness on my display (18 of 100)\n\n!screenshot1.png!"
    }, {"name": "created", "value": "1336029178408"}, {
        "name": "updated",
        "value": "1410962473006"
    }, {"name": "updaterName", "value": "artemtiunov"}, {
        "name": "updaterFullName",
        "value": "Artem Tiunov"
    }, {"name": "resolved", "value": "1410962472979"}, {
        "name": "reporterName",
        "value": "smandreev"
    }, {"name": "reporterFullName", "value": "Sergei Andreev"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {
        "name": "Type",
        "value": ["Cosmetics"],
        "valueId": ["Cosmetics"],
        "color": {"bg": "#d9ffc8", "fg": "#000"}
    }, {"name": "State", "value": ["Obsolete"], "valueId": ["Obsolete"]}, {
        "name": "Assignee",
        "value": [{"fullName": "Artem Tiunov", "value": "artemtiunov"}]
    }, {"name": "Subsystem", "value": ["UI"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Backlog"],
        "valueId": []
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-73749",
            "url": "https://youtrack.jetbrains.com/_persistent/screenshot1.png?file=74-73749&v=2&c=true",
            "value": "screenshot1.png"
        }]
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-25155",
    "entityId": "25-705992",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "25155"
    }, {"name": "summary", "value": "Add a combobox as a legend"}, {
        "name": "description",
        "value": "1. Когда в легенде очень много значений, получается трешняк. Так что предлагаю, когда значений больше 10-и, прятать их в настраиваемый комбобокс. Если меньше 10-и, то можно спокойно показывать все значения, как сейчас.\n\n2. Обсудили с Пашей, что когда по иси Y много значений, лучше не делать внутренний скролл, так как на меленьких мониторах из-за заголовка и легенды вообще мало чего влезать будет. Так что делаем обычный скролл, а легенду и настройки отображения тогда можно спокойно ставить над графиком, а не под ним, так как больше 1-2 строк он занимать не будет!"
    }, {"name": "created", "value": "1402394861112"}, {
        "name": "updated",
        "value": "1410959074397"
    }, {"name": "updaterName", "value": "pavel.nikitin"}, {
        "name": "updaterFullName",
        "value": "Pavel Nikitin"
    }, {"name": "resolved", "value": "1410864336383"}, {
        "name": "reporterName",
        "value": "artemtiunov"
    }, {"name": "reporterFullName", "value": "Artem Tiunov"}, {"name": "commentsCount", "value": "0"}, {
        "name": "votes",
        "value": "2"
    }, {
        "name": "links",
        "value": [{"type": "Depend", "role": "is required for", "value": "JT-25686"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-25175"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-25866"}, {
            "type": "Relates",
            "role": "relates to",
            "value": "JT-25808"
        }, {"type": "Relates", "role": "relates to", "value": "JT-26205"}, {
            "type": "Subtask",
            "role": "subtask of",
            "value": "JT-22667"
        }]
    }, {"name": "Priority", "value": ["Minor"], "valueId": ["Minor"], "color": {"bg": "#64992C"}}, {
        "name": "Type",
        "value": ["Usability Problem"],
        "valueId": ["Usability Problem"]
    }, {
        "name": "State",
        "value": ["Fixed"],
        "valueId": ["Fixed"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Pavel Nikitin", "value": "pavel.nikitin"}]}, {
        "name": "Subsystem",
        "value": ["Reports"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Fixed in builds",
        "value": ["11471"],
        "valueId": []
    }, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-171780",
            "url": "https://youtrack.jetbrains.com/_persistent/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202014-06-10%20%D0%B2%2012.43.25.png?file=74-171780&v=0&c=true",
            "value": "Снимок экрана 2014-06-10 в 12.43.25.png"
        }, {
            "id": "74-171796",
            "url": "https://youtrack.jetbrains.com/_persistent/3by%20reporter.png?file=74-171796&v=0&c=true",
            "value": "3by reporter.png"
        }]
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26483",
    "entityId": "25-747627",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26483"
    }, {"name": "summary", "value": "Change license limitations interpretation"}, {
        "name": "description",
        "value": "maxusers = users+reporters\n\nhttps://jetpass.myjetbrains.com/youtrack/issue/JPS-1790"
    }, {"name": "created", "value": "1410958562356"}, {
        "name": "updated",
        "value": "1410958939303"
    }, {"name": "updaterName", "value": "vgurov"}, {
        "name": "updaterFullName",
        "value": "Vadim Gurov"
    }, {"name": "reporterName", "value": "vgurov"}, {
        "name": "reporterFullName",
        "value": "Vadim Gurov"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-21844"}]
    }, {
        "name": "Priority",
        "value": ["Major"],
        "valueId": ["Major"],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Task"], "valueId": ["Task"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Harmonicity IX"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26482",
    "entityId": "25-747626",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26482"
    }, {"name": "summary", "value": "Reports Examples"}, {
        "name": "description",
        "value": "!reports_examples.png!\n\nЛер, жду от тебя репорты, по которым делать скрины и тексты к ним."
    }, {"name": "created", "value": "1410958510574"}, {
        "name": "updated",
        "value": "1410958510574"
    }, {"name": "updaterName", "value": "artemtiunov"}, {
        "name": "updaterFullName",
        "value": "Artem Tiunov"
    }, {"name": "reporterName", "value": "artemtiunov"}, {
        "name": "reporterFullName",
        "value": "Artem Tiunov"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Task"], "valueId": ["Task"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "valerie andrianova", "value": "valerie.andrianova"}]
    }, {"name": "Subsystem", "value": ["Reports"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-186310",
            "url": "https://youtrack.jetbrains.com/_persistent/reports_examples.png?file=74-186310&v=0&c=true",
            "value": "reports_examples.png"
        }]
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26478",
    "entityId": "25-747467",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26478"
    }, {
        "name": "summary",
        "value": "ZIP distribution: Make .sh and .bat scripts executable by default"
    }, {
        "name": "description",
        "value": "In build 11470, to run these scripts you have to run '{{chmod a+x}}' first."
    }, {"name": "created", "value": "1410951784844"}, {
        "name": "updated",
        "value": "1410955147531"
    }, {"name": "updaterName", "value": "i.kate"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Ivanova"
    }, {"name": "reporterName", "value": "i.kate"}, {
        "name": "reporterFullName",
        "value": "Ekaterina Ivanova"
    }, {"name": "commentsCount", "value": "1"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-24842"}]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Evgeny Naumenko", "value": "Evgeny_Naumenko"}]
    }, {"name": "Subsystem", "value": ["Installer"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Harmonicity IX"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [{
        "id": "27-801727",
        "author": "i.kate",
        "authorFullName": "Ekaterina Ivanova",
        "issueId": "JT-26478",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "actually, all sh scripts in the package do not have correct file mode: including hub.sh and youtrack.sh in apps.",
        "shownForIssueAuthor": false,
        "created": 1410955147541,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26448",
    "entityId": "25-746537",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26448"
    }, {"name": "summary", "value": "Dashboard has no yt icon"}, {
        "name": "description",
        "value": "Error: https://youtrack.jetbrains.com/dashboard/dashboard/images/2e998d02.youtrack-sign-48.svg"
    }, {"name": "created", "value": "1410855304693"}, {
        "name": "updated",
        "value": "1410954946841"
    }, {"name": "updaterName", "value": "vgurov"}, {
        "name": "updaterFullName",
        "value": "Vadim Gurov"
    }, {"name": "resolved", "value": "1410954946789"}, {
        "name": "reporterName",
        "value": "vgurov"
    }, {"name": "reporterFullName", "value": "Vadim Gurov"}, {"name": "commentsCount", "value": "0"}, {
        "name": "votes",
        "value": "0"
    }, {"name": "links", "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-7082"}]}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Task"], "valueId": ["Task"]}, {
        "name": "State",
        "value": ["Fixed"],
        "valueId": ["Fixed"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Vadim Gurov", "value": "vgurov"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26343",
    "entityId": "25-742110",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26343"
    }, {"name": "summary", "value": "Make \"create matrix report\" link work"}, {
        "name": "created",
        "value": "1410170526535"
    }, {"name": "updated", "value": "1410954659281"}, {
        "name": "updaterName",
        "value": "Mikhail.Kapusta"
    }, {"name": "updaterFullName", "value": "Mikhail Kapusta"}, {
        "name": "resolved",
        "value": "1410180830894"
    }, {"name": "reporterName", "value": "pavel.nikitin"}, {
        "name": "reporterFullName",
        "value": "Pavel Nikitin"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-22667"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Task"], "valueId": ["Task"]}, {
        "name": "State",
        "value": ["Verified"],
        "valueId": ["Verified"],
        "color": {"bg": "#339933", "fg": "white"}
    }, {"name": "Assignee", "value": [{"fullName": "Pavel Nikitin", "value": "pavel.nikitin"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Fixed in builds",
        "value": ["11367"],
        "valueId": []
    }, {"name": "Verified in build", "value": ["11485"], "valueId": []}, {
        "name": "Verified by",
        "value": [{"fullName": "Mikhail Kapusta", "value": "Mikhail.Kapusta"}]
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26434",
    "entityId": "25-746184",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26434"
    }, {"name": "summary", "value": "Change dashboard baseurl"}, {
        "name": "description",
        "value": "# modify web.xml. Remove\n        <init-param>\n            <param-name>servletPath</param-name>\n            <param-value>/dashboard</param-value>\n        </init-param>\n\n# change dashboard/app/index.html \n<!-- build:js scripts/modules.js --> -> <!-- build:js dashboard/scripts/modules.js -->"
    }, {"name": "created", "value": "1410785137407"}, {
        "name": "updated",
        "value": "1410954191060"
    }, {"name": "updaterName", "value": "vgurov"}, {
        "name": "updaterFullName",
        "value": "Vadim Gurov"
    }, {"name": "resolved", "value": "1410954191008"}, {
        "name": "reporterName",
        "value": "vgurov"
    }, {"name": "reporterFullName", "value": "Vadim Gurov"}, {"name": "commentsCount", "value": "0"}, {
        "name": "votes",
        "value": "0"
    }, {
        "name": "links",
        "value": [{"type": "Depend", "role": "is required for", "value": "JT-26137"}, {
            "type": "Subtask",
            "role": "subtask of",
            "value": "JT-7082"
        }]
    }, {
        "name": "Priority",
        "value": ["Show-stopper"],
        "valueId": ["Show-stopper"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Task"], "valueId": ["Task"]}, {
        "name": "State",
        "value": ["Fixed"],
        "valueId": ["Fixed"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Vadim Gurov", "value": "vgurov"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26480",
    "entityId": "25-747529",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26480"
    }, {"name": "summary", "value": "OpenUrl(some_url) method"}, {
        "name": "description",
        "value": "In my workflow I want notify my site about some actions in YouTrack. For example, like bitbucket/github/etc webhooks. Only GET http query, without response result (or with)? \nIs it posible?\n"
    }, {"name": "created", "value": "1410953840988"}, {
        "name": "updated",
        "value": "1410953840988"
    }, {"name": "updaterName", "value": "r3c130n"}, {
        "name": "updaterFullName",
        "value": "Mikhail Medvedev"
    }, {"name": "reporterName", "value": "r3c130n"}, {
        "name": "reporterFullName",
        "value": "Mikhail Medvedev"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Feature"], "valueId": ["Feature"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Mariya Davydova", "value": "mariyafomkina"}]}, {
        "name": "Subsystem",
        "value": ["Workflow"],
        "valueId": [],
        "color": {"bg": "#ccffff", "fg": "#000"}
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26404",
    "entityId": "25-744962",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26404"
    }, {
        "name": "summary",
        "value": "Incorrect baseURL when navigating from Reports screen on YT InCloud"
    }, {
        "name": "description",
        "value": "jetpass.myjetbrains.com, build n. 11418\n\n# In the Reports section, click any of the links in the main manu (Issues, Agile etc.)\n*Result:* You get 404 error\nin the URL the 'youtrack' is skipped, and the page address is e.g. jetpass.myjetbrains.com/issues\ninstead of jetpass.myjetbrains.com/youtrack/issues\n\n"
    }, {"name": "created", "value": "1410517696541"}, {
        "name": "updated",
        "value": "1410953810577"
    }, {"name": "updaterName", "value": "Mikhail.Kapusta"}, {
        "name": "updaterFullName",
        "value": "Mikhail Kapusta"
    }, {"name": "resolved", "value": "1410764435844"}, {
        "name": "reporterName",
        "value": "i.kate"
    }, {"name": "reporterFullName", "value": "Ekaterina Ivanova"}, {
        "name": "commentsCount",
        "value": "1"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-22667"}]
    }, {
        "name": "Priority",
        "value": ["Show-stopper"],
        "valueId": ["Show-stopper"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Verified"],
        "valueId": ["Verified"],
        "color": {"bg": "#339933", "fg": "white"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Alexander Volfman", "value": "Alexander.Volfman"}]
    }, {"name": "Subsystem", "value": ["Reports"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Harmonicity IX"],
        "valueId": []
    }, {"name": "Fixed in builds", "value": ["11452"], "valueId": []}, {
        "name": "Verified in build",
        "value": ["11485"],
        "valueId": []
    }, {
        "name": "Verified by",
        "value": [{"fullName": "Mikhail Kapusta", "value": "Mikhail.Kapusta"}]
    }, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-185537",
            "url": "https://youtrack.jetbrains.com/_persistent/wrongBaseUrlBug.png?file=74-185537&v=0&c=true",
            "value": "wrongBaseUrlBug.png"
        }]
    }],
    "comment": [{
        "id": "27-799808",
        "author": "Alexander.Volfman",
        "authorFullName": "Alexander Volfman",
        "issueId": "JT-26404",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "'base' url used to prefix relative urls when doing a redirect to old ui parts",
        "shownForIssueAuthor": false,
        "created": 1410764436034,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26392",
    "entityId": "25-744450",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26392"
    }, {
        "name": "summary",
        "value": "There's no current session to attach transient entity to."
    }, {
        "name": "description",
        "value": "try to login to http://harmony-eap-sandbox.myjetbrains.com/\nor try to create new user\n\n\njava.lang.IllegalStateException: There's no current session to attach transient entity to.\n\tat com.jetbrains.teamsys.dnq.database.TransientStoreUtil.reattach(TransientStoreUtil.java:71)\n\tat com.jetbrains.teamsys.dnq.association.PrimitiveAssociationSemantics.get(PrimitiveAssociationSemantics.java:31)\n\tat com.jetbrains.teamsys.dnq.association.PrimitiveAssociationSemantics.get(PrimitiveAssociationSemantics.java:71)\n\tat jetbrains.charisma.persistence.user.UserImpl.isInGroup(UserImpl.java:771)\n\tat jetbrains.charisma.main.PerGroupFlagValue$1.accept(PerGroupFlagValue.java:39)\n\tat jetbrains.charisma.main.PerGroupFlagValue$1.accept(PerGroupFlagValue.java:37)\n\tat jetbrains.mps.internal.collections.runtime.IWhereFilter.invoke(IWhereFilter.java:14)\n\tat jetbrains.mps.internal.collections.runtime.IWhereFilter.invoke(IWhereFilter.java:7)\n\tat jetbrains.mps.internal.collections.runtime.impl.FilteringSequence$FilteringIterator.moveToNext(FilteringSequence.java:68)\n\tat jetbrains.mps.internal.collections.runtime.impl.FilteringSequence$FilteringIterator.hasNext(FilteringSequence.java:37)\n\tat jetbrains.mps.internal.collections.runtime.IterableUtils.isEmpty(IterableUtils.java:58)\n\tat jetbrains.mps.internal.collections.runtime.Sequence.isEmpty(Sequence.java:184)\n\tat jetbrains.teamsys.dnq.runtime.queries.QueryOperations.isEmpty(QueryOperations.java:127)\n\tat jetbrains.charisma.main.PerGroupFlagValue.isEnabled(PerGroupFlagValue.java:37)\n\tat jetbrains.charisma.main.AbstractFeatureFlag.isEnabled(AbstractFeatureFlag.java:28)\n\tat jetbrains.youtrack.imageTool.tool.AttachFileActionsTemplate.doRenderAttachFileActions(AttachFileActionsTemplate.java:37)\n\tat jetbrains.youtrack.imageTool.tool.AttachFileActionsTemplate.access$000(AttachFileActionsTemplate.java:23)\n\tat jetbrains.youtrack.imageTool.tool.AttachFileActionsTemplate$1.render(AttachFileActionsTemplate.java:67)\n\tat jetbrains.mps.webr.stateless.template.runtime.BaseTemplate.render(BaseTemplate.java:125)\n\tat jetbrains.youtrack.imageTool.tool.AttachFileActionsTemplate.render(AttachFileActionsTemplate.java:65)\n\tat jetbrains.mps.webr.stateless.template.runtime.BaseTemplate.render(BaseTemplate.java:118)\n\tat jetbrains.mps.webr.stateless.template.runtime.BaseTemplate.render(BaseTemplate.java:109)\n\tat jetbrains.mps.webr.stateless.template.runtime.BaseTemplate.renderToString(BaseTemplate.java:97)\n\tat jetbrains.youtrack.imageTool.stateful.AttachActions_HtmlTemplateComponent.renderTemplate(AttachActions_HtmlTemplateComponent.java:80)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.welcomeScreen.Dashboard_RootHtmlTemplateComponent.renderTemplate(Dashboard_RootHtmlTemplateComponent.java:232)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.welcomeScreen.DashboardLayout_LayoutComponent.renderTemplate(DashboardLayout_LayoutComponent.java:383)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.render(TemplateComponent.java:391)\n\tat jetbrains.mps.webr.runtime.requestProcessor.ResponseFactory$2.doAction(ResponseFactory.java:79)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.executeResponseAction(MainServlet.java:198)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:149)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:734)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:847)\n\tat org.eclipse.jetty.servlet.ServletHolder.handle(ServletHolder.java:648)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1336)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:453)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:137)\n\tat org.eclipse.jetty.security.SecurityHandler.handle(SecurityHandler.java:559)\n\tat org.eclipse.jetty.server.session.SessionHandler.doHandle(SessionHandler.java:231)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1072)\n\tat org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:382)\n\tat org.eclipse.jetty.server.session.SessionHandler.doScope(SessionHandler.java:193)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1006)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:135)\n\tat org.eclipse.jetty.server.handler.ContextHandlerCollection.handle(ContextHandlerCollection.java:224)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:116)\n\tat org.eclipse.jetty.server.Server.handle(Server.java:365)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.handleRequest(AbstractHttpConnection.java:485)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.headerComplete(AbstractHttpConnection.java:926)\n\tat org.eclipse.jetty.server.AbstractHttpConnection$RequestHandler.headerComplete(AbstractHttpConnection.java:988)\n\tat org.eclipse.jetty.http.HttpParser.parseNext(HttpParser.java:635)\n\tat org.eclipse.jetty.http.HttpParser.parseAvailable(HttpParser.java:235)\n\tat org.eclipse.jetty.server.AsyncHttpConnection.handle(AsyncHttpConnection.java:82)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint.handle(SelectChannelEndPoint.java:627)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint$1.run(SelectChannelEndPoint.java:51)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:608)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool$3.run(QueuedThreadPool.java:543)\n\tat java.lang.Thread.run(Thread.java:744)\n\n\n===Environment details===\nhost: ip-10-77-157-150.eu-west-1.compute.internal\nbase url: http://harmony-eap-sandbox.myjetbrains.com/youtrack\nversion: 6.0 EAP\nbuild: 11418 [11-Sep-2014 17:06] \njava.version: 1.7.0_51\njava.vendor: Oracle Corporation\njava.vm.specification.version: 1.7\njava.vm.specification.vendor: Oracle Corporation\njava.vm.specification.name: Java Virtual Machine Specification\njava.vm.version: 24.51-b03\njava.vm.vendor: Oracle Corporation\njava.vm.name: Java HotSpot(TM) Server VM\njava.specification.version: 1.7\njava.specification.vendor: Oracle Corporation\njava.specification.name: Java Platform API Specification\njava.class.version: 51.0\nos.name: Linux\nos.arch: i386\nos.version: 2.6.21.7-2.ec2.v1.2.fc8xen\nMax memory: 2 GB (2712928256 bytes)\nFree memory: 2 GB (2473507184 bytes)\nTotal memory: 2 GB (2712928256 bytes)\nAvailable processors: 2\nThrown at: Thursday, September 11, 2014 6:23:20 PM MSK"
    }, {"name": "created", "value": "1410445409380"}, {
        "name": "updated",
        "value": "1410953763288"
    }, {"name": "updaterName", "value": "Mikhail.Kapusta"}, {
        "name": "updaterFullName",
        "value": "Mikhail Kapusta"
    }, {"name": "resolved", "value": "1410886960960"}, {
        "name": "reporterName",
        "value": "app_exception"
    }, {"name": "reporterFullName", "value": "Exception Robot"}, {
        "name": "commentsCount",
        "value": "1"
    }, {"name": "votes", "value": "1"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "is duplicated by", "value": "JT-26396"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-26402"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-26423"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-26424"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-26425"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-26440"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-26449"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-26464"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-26466"}, {
            "type": "Relates",
            "role": "relates to",
            "value": "JT-26393"
        }]
    }, {
        "name": "Priority",
        "value": ["Show-stopper"],
        "valueId": ["Show-stopper"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Verified"],
        "valueId": ["Verified"],
        "color": {"bg": "#339933", "fg": "white"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Ekaterina Zaikina", "value": "Ekaterina.Zaikina"}]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Harmonicity IX"],
        "valueId": []
    }, {"name": "Fixed in builds", "value": ["11480"], "valueId": []}, {
        "name": "Verified in build",
        "value": ["11485"],
        "valueId": []
    }, {
        "name": "Verified by",
        "value": [{"fullName": "Mikhail Kapusta", "value": "Mikhail.Kapusta"}]
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [{
        "id": "27-798843",
        "author": "pavel.nikitin",
        "authorFullName": "Pavel Nikitin",
        "issueId": "JT-26392",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Doesn't stop prod update.",
        "shownForIssueAuthor": false,
        "created": 1410447900812,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26443",
    "entityId": "25-746261",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26443"
    }, {"name": "summary", "value": "Language chooser dialog is not shown on settings page"}, {
        "name": "description",
        "value": "STR:\n\n1. Navigate to /settings\n2. Click on pencil icon to edit application language\n\nER: language chooser dialog opens\nAR: screen is blurred, but dialog is missing\n\n{code}\nUncaught TypeError: Cannot set property 'showExistingDraft' of undefined \nhttp://unit-487:8081/settings:592\n{code}"
    }, {"name": "created", "value": "1410791490676"}, {
        "name": "updated",
        "value": "1410952089098"
    }, {"name": "updaterName", "value": "Mikhail.Kapusta"}, {
        "name": "updaterFullName",
        "value": "Mikhail Kapusta"
    }, {"name": "resolved", "value": "1410804206320"}, {
        "name": "reporterName",
        "value": "Evgeny_Naumenko"
    }, {"name": "reporterFullName", "value": "Evgeny Naumenko"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "1"}, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Verified"],
        "valueId": ["Verified"],
        "color": {"bg": "#339933", "fg": "white"}
    }, {"name": "Assignee", "value": [{"fullName": "Alexander Anisimov", "value": "xi-eye"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Fixed in builds",
        "value": ["11464"],
        "valueId": []
    }, {"name": "Browser", "value": ["Chrome 36.x"], "valueId": ["Chrome 36.x"]}, {
        "name": "Verified in build",
        "value": ["11485"],
        "valueId": []
    }, {
        "name": "Verified by",
        "value": [{"fullName": "Mikhail Kapusta", "value": "Mikhail.Kapusta"}]
    }, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-185910",
            "url": "https://youtrack.jetbrains.com/_persistent/no_dialog.png?file=74-185910&v=0&c=true",
            "value": "no_dialog.png"
        }]
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-24842",
    "entityId": "25-699247",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "24842"
    }, {"name": "summary", "value": "YT Installer 6.0 Polishing"}, {
        "name": "created",
        "value": "1400502345729"
    }, {"name": "updated", "value": "1410951955601"}, {
        "name": "updaterName",
        "value": "Evgeny_Naumenko"
    }, {"name": "updaterFullName", "value": "Evgeny Naumenko"}, {
        "name": "reporterName",
        "value": "vgurov"
    }, {"name": "reporterFullName", "value": "Vadim Gurov"}, {"name": "commentsCount", "value": "0"}, {
        "name": "votes",
        "value": "0"
    }, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "parent for", "value": "JT-24610"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24797"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24798"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24958"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25243"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25290"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25292"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25293"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25294"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25709"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25742"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25743"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25928"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26019"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26047"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26105"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26244"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26364"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26365"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26438"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26463"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26478"
        }]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Feature"], "valueId": ["Feature"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Evgeny Naumenko", "value": "Evgeny_Naumenko"}]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26374",
    "entityId": "25-744037",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26374"
    }, {"name": "summary", "value": "No menu item \"Reports\" on agile board screen"}, {
        "name": "description",
        "value": "see http://youtrack.jetbrains.com/rest/agile/YouTrack-0/sprint/Harmonicity+IX for example"
    }, {"name": "created", "value": "1410417885906"}, {
        "name": "updated",
        "value": "1410951877470"
    }, {"name": "updaterName", "value": "Mikhail.Kapusta"}, {
        "name": "updaterFullName",
        "value": "Mikhail Kapusta"
    }, {"name": "resolved", "value": "1410951620750"}, {
        "name": "reporterName",
        "value": "vgurov"
    }, {"name": "reporterFullName", "value": "Vadim Gurov"}, {"name": "commentsCount", "value": "2"}, {
        "name": "votes",
        "value": "0"
    }, {
        "name": "links",
        "value": [{"type": "Relates", "role": "relates to", "value": "JT-26294"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Verified"],
        "valueId": ["Verified"],
        "color": {"bg": "#339933", "fg": "white"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Alexander Volfman", "value": "Alexander.Volfman"}]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Harmonicity IX"],
        "valueId": []
    }, {"name": "Fixed in builds", "value": ["11430"], "valueId": []}, {
        "name": "Verified in build",
        "value": ["11485"],
        "valueId": []
    }, {
        "name": "Verified by",
        "value": [{"fullName": "Mikhail Kapusta", "value": "Mikhail.Kapusta"}]
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [{
        "id": "27-799928",
        "author": "Mikhail.Kapusta",
        "authorFullName": "Mikhail Kapusta",
        "issueId": "JT-26374",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Build #11456\ninvalid path to reports from agile page (path leads to \"reports/\" page)\n",
        "shownForIssueAuthor": false,
        "created": 1410772842449,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-801647",
        "author": "Alexander.Volfman",
        "authorFullName": "Alexander Volfman",
        "issueId": "JT-26374",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "fixed with JT-26294",
        "shownForIssueAuthor": false,
        "created": 1410951620807,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-24569",
    "entityId": "25-690352",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "24569"
    }, {
        "name": "summary",
        "value": "Backlog Prioritization (manual sorting) Usability Problem"
    }, {
        "name": "description",
        "value": "Basically, the problem is that it's not obvious that you can manually sort any search results (issues list) and this order will be kept on the Issues List and on the Agile board. \n@artemtiunov, please help us with this usability problem. \nNote, that if you can provide us with easy solution (that doesn't require a lot of UI changes), we'll implement it in the current UI. If you decide that the solution requires a lot of changes, we'll do it in scope of new UI.\n \n\nFrom customer feedback:\nI know that searches have an order themselves, but it’s not obvious in the UI how it works. I know I asked before and I believe that you said that if it’s a context, the order is preserved. This seems like something that works but that is not well defined by the UI.\n\nI think the requirement here might be “multiple backlogs” or, perhaps more simply done, “obvious order in every saved query”\n\nAlso, another team keeps a “priority field” because, in their words: “Currently our YouTrack PMs priority is handled by a Weight field – a numeric value determining the priority: the larger number the higher priority.\n\nIn the document I found just a Rank field which is not displayed and is set by the system when PMs are reordered in UI. This is very inefficient and inconvenient for us. We prefer to set the priority number manually. I don't hold on the field name.”\n\nThis is another example where the lack of discoverability of the feature has brought people into managing things the hard way.\n"
    }, {"name": "created", "value": "1397826322990"}, {
        "name": "updated",
        "value": "1410951642536"
    }, {"name": "updaterName", "value": "i.kate"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Ivanova"
    }, {"name": "reporterName", "value": "valerie.andrianova"}, {
        "name": "reporterFullName",
        "value": "valerie andrianova"
    }, {"name": "commentsCount", "value": "1"}, {"name": "votes", "value": "1"}, {
        "name": "links",
        "value": [{"type": "Relates", "role": "relates to", "value": "JT-18217"}, {
            "type": "Relates",
            "role": "relates to",
            "value": "JT-24282"
        }]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Usability Problem"], "valueId": ["Usability Problem"]}, {
        "name": "State",
        "value": ["In Progress"],
        "valueId": ["In Progress"],
        "color": {"bg": "#00a1b4", "fg": "white"}
    }, {"name": "Assignee", "value": [{"fullName": "Ekaterina Ivanova", "value": "i.kate"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-165047",
            "url": "https://youtrack.jetbrains.com/_persistent/Custom%20order.png?file=74-165047&v=0&c=true",
            "value": "Custom order.png"
        }, {
            "id": "74-165048",
            "url": "https://youtrack.jetbrains.com/_persistent/BackLog.png?file=74-165048&v=0&c=true",
            "value": "BackLog.png"
        }]
    }],
    "comment": [{
        "id": "27-723213",
        "author": "artemtiunov",
        "authorFullName": "Artem Tiunov",
        "issueId": "JT-24569",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Основная проблема сейчас — это отсутствие обратной связи. Когда мы меняем порядок, мы видим только то, что он изменен. А о том, что он еще и сохраняется в текущий Saved search, история умалчивает.\n\n1. Предлагаю вполне себе заметно прям отдельно предлагать сохранить измененный порядок (а не делать это автоматически) в текущий saved search, если он вообще есть. \n\n2. Если его нет, соответственно предлагать сохранить измененный порядок в новый saved search.\n\n3. Ситуация третья. Когда запрос на выдачу сделан с конкретным параметром сортировки (updated, priority и т.д.), меняя сортировку руками, из запроса (в поле поиска) она исчезает. И опять же видим предложение сохранить в новый saved search.\n\n4. Когда уже созданный saved search имеет конкретный параметр сортировки и мы меняем ее руками, уведомление должно нам сказать, что именно по этой причине в данном saved search мы поменять ничего не можем, и предложить создать новый saved search!\n\n@i.kate Кать, для всех четырех ситуаций нужен текст! Один из примеров в аттаче.\n\n@xi-eye Во всех этих случаях вертикальная синяя полоса будет только до сохранения кастомной сортировки. А после сохранения ее показывать не нужно, так как смысла в ней в общем-то не будет.\n\n\n",
        "shownForIssueAuthor": false,
        "created": 1398096399364,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26431",
    "entityId": "25-746129",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26431"
    }, {"name": "summary", "value": "Hub admin pages do not work with Hub 0.6"}, {
        "name": "description",
        "value": "The problem is in youtrack with embedded hub admin pages.\n\nPages /users, /groups and /roles should redirect to hub UI.\n\nAfter moving to Hub 0.6 we can't access any of this pages, the error page is shown instead."
    }, {"name": "created", "value": "1410781666534"}, {
        "name": "updated",
        "value": "1410951072174"
    }, {"name": "updaterName", "value": "Mikhail.Kapusta"}, {
        "name": "updaterFullName",
        "value": "Mikhail Kapusta"
    }, {"name": "resolved", "value": "1410887069797"}, {
        "name": "reporterName",
        "value": "mariyafomkina"
    }, {"name": "reporterFullName", "value": "Mariya Davydova"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Depend", "role": "is required for", "value": "JT-26073"}, {
            "type": "Subtask",
            "role": "subtask of",
            "value": "JT-21857"
        }]
    }, {
        "name": "Priority",
        "value": ["Show-stopper"],
        "valueId": ["Show-stopper"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Verified"],
        "valueId": ["Verified"],
        "color": {"bg": "#339933", "fg": "white"}
    }, {"name": "Assignee", "value": [{"fullName": "Evgeniy Schepotiev", "value": "zeckson"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Fixed in builds",
        "value": ["11482"],
        "valueId": []
    }, {"name": "Verified in build", "value": ["11485"], "valueId": []}, {
        "name": "Verified by",
        "value": [{"fullName": "Mikhail Kapusta", "value": "Mikhail.Kapusta"}]
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26045",
    "entityId": "25-730073",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26045"
    }, {
        "name": "summary",
        "value": "Do not show \"0 saved drafts combo\" when there are no saved drafts"
    }, {"name": "created", "value": "1408350703801"}, {
        "name": "updated",
        "value": "1410950699661"
    }, {"name": "updaterName", "value": "smandreev"}, {
        "name": "updaterFullName",
        "value": "Sergei Andreev"
    }, {"name": "resolved", "value": "1409560874221"}, {
        "name": "reporterName",
        "value": "oleg.stepanov@jetbrains.com"
    }, {"name": "reporterFullName", "value": "Oleg Stepanov"}, {
        "name": "commentsCount",
        "value": "2"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-7642"}]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Usability Problem"], "valueId": ["Usability Problem"]}, {
        "name": "State",
        "value": ["Verified"],
        "valueId": ["Verified"],
        "color": {"bg": "#339933", "fg": "white"}
    }, {"name": "Assignee", "value": [{"fullName": "Anna Zhdan", "value": "Anna.Zhdan"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["6.0"], "valueId": []}, {
        "name": "Fixed in builds",
        "value": ["11076"],
        "valueId": []
    }, {"name": "Verified in build", "value": ["11444"], "valueId": []}, {
        "name": "Verified by",
        "value": [{"fullName": "Sergei Andreev", "value": "smandreev"}]
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-186249",
            "url": "https://youtrack.jetbrains.com/_persistent/image.png?file=74-186249&v=0&c=true",
            "value": "image.png"
        }]
    }],
    "comment": [{
        "id": "27-789121",
        "author": "Mikhail.Kapusta",
        "authorFullName": "Mikhail Kapusta",
        "issueId": "JT-26045",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "still reproduce for build #11108\n",
        "shownForIssueAuthor": false,
        "created": 1409047186334,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-801634",
        "author": "smandreev",
        "authorFullName": "Sergei Andreev",
        "issueId": "JT-26045",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "!image.png!",
        "shownForIssueAuthor": false,
        "created": 1410950699672,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26390",
    "entityId": "25-744436",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26390"
    }, {"name": "summary", "value": "Can't access profile from Reports page"}, {
        "name": "description",
        "value": "ER: I click on profile link under my name and access my profile\nAR: I click and suddenly appear on /issues page"
    }, {"name": "created", "value": "1410443586096"}, {
        "name": "updated",
        "value": "1410950574244"
    }, {"name": "updaterName", "value": "Mikhail.Kapusta"}, {
        "name": "updaterFullName",
        "value": "Mikhail Kapusta"
    }, {"name": "resolved", "value": "1410825652077"}, {
        "name": "reporterName",
        "value": "mariyafomkina"
    }, {"name": "reporterFullName", "value": "Mariya Davydova"}, {
        "name": "commentsCount",
        "value": "5"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-22667"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Verified"],
        "valueId": ["Verified"],
        "color": {"bg": "#339933", "fg": "white"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Alexander Volfman", "value": "Alexander.Volfman"}]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Harmonicity IX"],
        "valueId": []
    }, {"name": "Fixed in builds", "value": ["11425"], "valueId": []}, {
        "name": "Verified in build",
        "value": ["11485"],
        "valueId": []
    }, {
        "name": "Verified by",
        "value": [{"fullName": "Mikhail Kapusta", "value": "Mikhail.Kapusta"}]
    }, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-185424",
            "url": "https://youtrack.jetbrains.com/_persistent/Screenshot-Reports%20-%20Google%20Chrome.png?file=74-185424&v=0&c=true",
            "value": "Screenshot-Reports - Google Chrome.png"
        }, {
            "id": "74-185846",
            "url": "https://youtrack.jetbrains.com/_persistent/image.png?file=74-185846&v=0&c=true",
            "value": "image.png"
        }]
    }],
    "comment": [{
        "id": "27-798776",
        "author": "pavel.nikitin",
        "authorFullName": "Pavel Nikitin",
        "issueId": "JT-26390",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Take a look, please. There is # instead of URL.",
        "shownForIssueAuthor": false,
        "created": 1410443979501,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-799926",
        "author": "Mikhail.Kapusta",
        "authorFullName": "Mikhail Kapusta",
        "issueId": "JT-26390",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Build 11456\n404 after click on user profile link from reports page",
        "shownForIssueAuthor": false,
        "created": 1410772663255,
        "updated": 1410772674837,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-799930",
        "author": "pavel.nikitin",
        "authorFullName": "Pavel Nikitin",
        "issueId": "JT-26390",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "What 404? Please, clarify.",
        "shownForIssueAuthor": false,
        "created": 1410772903971,
        "updated": 1410443979454,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-799935",
        "author": "Mikhail.Kapusta",
        "authorFullName": "Mikhail Kapusta",
        "issueId": "JT-26390",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "!image.png!",
        "shownForIssueAuthor": false,
        "created": 1410773284622,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-800503",
        "author": "Alexander.Volfman",
        "authorFullName": "Alexander Volfman",
        "issueId": "JT-26390",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "route for /user added",
        "shownForIssueAuthor": false,
        "created": 1410825652277,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26323",
    "entityId": "25-741124",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26323"
    }, {
        "name": "summary",
        "value": "Update \"Test Packaged 4.1.2->EAP DB Migration\" build configuration"
    }, {
        "name": "description",
        "value": "http://buildserver.labs.intellij.net/viewType.html?buildTypeId=YTDEV_TestPackaged412eapDbMigration\n\n# manually upgrade test database to 5.0 and commit git\n# rename build configuration to \"Test Packaged 5.0->EAP DB Migration\""
    }, {"name": "created", "value": "1409901131978"}, {
        "name": "updated",
        "value": "1410950518694"
    }, {"name": "updaterName", "value": "smandreev"}, {
        "name": "updaterFullName",
        "value": "Sergei Andreev"
    }, {"name": "resolved", "value": "1410174873491"}, {
        "name": "reporterName",
        "value": "vgurov"
    }, {"name": "reporterFullName", "value": "Vadim Gurov"}, {"name": "commentsCount", "value": "1"}, {
        "name": "votes",
        "value": "0"
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Task"], "valueId": ["Task"]}, {
        "name": "State",
        "value": ["Verified"],
        "valueId": ["Verified"],
        "color": {"bg": "#339933", "fg": "white"}
    }, {"name": "Assignee", "value": [{"fullName": "Leonid Stryuk", "value": "Leonid.Stryuk"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Fixed in builds",
        "value": ["11341"],
        "valueId": []
    }, {"name": "Verified in build", "value": ["11485"], "valueId": []}, {
        "name": "Verified by",
        "value": [{"fullName": "Sergei Andreev", "value": "smandreev"}]
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [{
        "id": "27-801628",
        "author": "smandreev",
        "authorFullName": "Sergei Andreev",
        "issueId": "JT-26323",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Indeed renamed",
        "shownForIssueAuthor": false,
        "created": 1410950518721,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-25398",
    "entityId": "25-711987",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "25398"
    }, {"name": "summary", "value": "Processing took too long :("}, {
        "name": "description",
        "value": "jetbrains.charisma.main.ProcessingTookToLongException: Processing took too long :(\n\tat jetbrains.charisma.main.QueryCancellingPolicyProviderImpl$1.doCancel(QueryCancellingPolicyProviderImpl.java:27)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorBase.nextId(EntityIteratorBase.java:130)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorBase.next(EntityIteratorBase.java:96)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorBase.next(EntityIteratorBase.java:25)\n\tat com.jetbrains.teamsys.dnq.database.PersistentEntityIteratorWrapper.next(PersistentEntityIteratorWrapper.java:26)\n\tat com.jetbrains.teamsys.dnq.database.PersistentEntityIteratorWrapper.next(PersistentEntityIteratorWrapper.java:9)\n\tat jetbrains.mps.internal.collections.runtime.impl.ComparingSequence$ComparingIterator.init(ComparingSequence.java:82)\n\tat jetbrains.mps.internal.collections.runtime.impl.ComparingSequence$ComparingIterator.hasNext(ComparingSequence.java:53)\n\tat jetbrains.mps.internal.collections.runtime.IterableUtils.count(IterableUtils.java:51)\n\tat jetbrains.mps.internal.collections.runtime.Sequence.count(Sequence.java:180)\n\tat jetbrains.teamsys.dnq.runtime.queries.QueryOperations.getSize(QueryOperations.java:86)\n\tat jetbrains.charisma.smartui.persistent.IssueChangeImpl.countNewComments(IssueChangeImpl.java:61)\n\tat jetbrains.charisma.smartui.persistent.IssueChangeImpl.getNewCommentsCount(IssueChangeImpl.java:57)\n\tat jetbrains.charisma.smartui.comments.IssueCommentsTitle_HtmlTemplateComponent$1.invoke(IssueCommentsTitle_HtmlTemplateComponent.java:67)\n\tat jetbrains.charisma.smartui.comments.IssueCommentsTitle_HtmlTemplateComponent$1.invoke(IssueCommentsTitle_HtmlTemplateComponent.java:55)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:466)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.issueDetailLevel.IssueCommentsToggler_HtmlTemplateComponent.renderTemplate(IssueCommentsToggler_HtmlTemplateComponent.java:80)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.issueDetailLevel.IssuePropertiesNew_HtmlTemplateComponent.renderTemplate(IssuePropertiesNew_HtmlTemplateComponent.java:196)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.issueDetailLevel.ViewIssueNew_HtmlTemplateComponent.renderTemplate(ViewIssueNew_HtmlTemplateComponent.java:646)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.content.IssueItem_HtmlTemplateComponent.renderTemplate(IssueItem_HtmlTemplateComponent.java:353)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.content.IssueList_HtmlTemplateComponent.renderTemplate(IssueList_HtmlTemplateComponent.java:407)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.content.IssuesContent_HtmlTemplateComponent.renderTemplate(IssuesContent_HtmlTemplateComponent.java:248)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.workspace.Issues_RootHtmlTemplateComponent.renderTemplate(Issues_RootHtmlTemplateComponent.java:519)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.layout.SmartUI_LayoutComponent.renderTemplate(SmartUI_LayoutComponent.java:385)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.render(TemplateComponent.java:389)\n\tat jetbrains.mps.webr.runtime.requestProcessor.ResponseFactory$2.doAction(ResponseFactory.java:79)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.executeResponseAction(MainServlet.java:174)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:125)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:734)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:847)\n\tat org.eclipse.jetty.servlet.ServletHolder.handle(ServletHolder.java:648)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1336)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:453)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:137)\n\tat org.eclipse.jetty.security.SecurityHandler.handle(SecurityHandler.java:559)\n\tat org.eclipse.jetty.server.session.SessionHandler.doHandle(SessionHandler.java:231)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1072)\n\tat org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:382)\n\tat org.eclipse.jetty.server.session.SessionHandler.doScope(SessionHandler.java:193)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1006)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:135)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:116)\n\tat org.eclipse.jetty.server.Server.handle(Server.java:365)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.handleRequest(AbstractHttpConnection.java:485)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.headerComplete(AbstractHttpConnection.java:926)\n\tat org.eclipse.jetty.server.AbstractHttpConnection$RequestHandler.headerComplete(AbstractHttpConnection.java:988)\n\tat org.eclipse.jetty.http.HttpParser.parseNext(HttpParser.java:635)\n\tat org.eclipse.jetty.http.HttpParser.parseAvailable(HttpParser.java:235)\n\tat org.eclipse.jetty.server.AsyncHttpConnection.handle(AsyncHttpConnection.java:82)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint.handle(SelectChannelEndPoint.java:627)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint$1.run(SelectChannelEndPoint.java:51)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:608)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool$3.run(QueuedThreadPool.java:543)\n\tat java.lang.Thread.run(Thread.java:744)\n\nCrash while selecting saved search.\n\n===Environment details===\nhost: banner4\nbase url: http://jayn.wayn.net\nversion: 5.1\nbuild: 8447 [13-Feb-2014 14:10] \njava.version: 1.7.0_45\njava.vendor: Oracle Corporation\njava.vm.specification.version: 1.7\njava.vm.specification.vendor: Oracle Corporation\njava.vm.specification.name: Java Virtual Machine Specification\njava.vm.version: 24.45-b08\njava.vm.vendor: Oracle Corporation\njava.vm.name: Java HotSpot(TM) 64-Bit Server VM\njava.specification.version: 1.7\njava.specification.vendor: Oracle Corporation\njava.specification.name: Java Platform API Specification\njava.class.version: 51.0\nos.name: Linux\nos.arch: amd64\nos.version: 3.2.0-53-generic\nMax memory: 1 GB (2077753344 bytes)\nFree memory: 605 MB (635436736 bytes)\nTotal memory: 1 GB (2077753344 bytes)\nAvailable processors: 8\nThrown at: Monday, 30 June 2014 07:24:23 o'clock BST"
    }, {"name": "created", "value": "1404109659689"}, {
        "name": "updated",
        "value": "1410948865760"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "reporterName", "value": "app_exception"}, {
        "name": "reporterFullName",
        "value": "Exception Robot"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "is duplicated by", "value": "JT-25426"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-26467"
        }]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Pavel Nikitin", "value": "pavel.nikitin"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Affected versions", "value": ["5.1"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26467",
    "entityId": "25-747139",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26467"
    }, {"name": "summary", "value": "Processing took too long :("}, {
        "name": "description",
        "value": "jetbrains.charisma.main.ProcessingTookToLongException: Processing took too long :(\n\tat jetbrains.charisma.main.QueryCancellingPolicyProviderImpl$1.doCancel(QueryCancellingPolicyProviderImpl.java:27)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorBase.nextId(EntityIteratorBase.java:130)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorBase.next(EntityIteratorBase.java:96)\n\tat jetbrains.exodus.database.impl.iterate.EntityIteratorBase.next(EntityIteratorBase.java:25)\n\tat com.jetbrains.teamsys.dnq.database.PersistentEntityIteratorWrapper.next(PersistentEntityIteratorWrapper.java:26)\n\tat com.jetbrains.teamsys.dnq.database.PersistentEntityIteratorWrapper.next(PersistentEntityIteratorWrapper.java:9)\n\tat jetbrains.mps.internal.collections.runtime.impl.ComparingSequence$ComparingIterator.init(ComparingSequence.java:82)\n\tat jetbrains.mps.internal.collections.runtime.impl.ComparingSequence$ComparingIterator.hasNext(ComparingSequence.java:53)\n\tat jetbrains.mps.internal.collections.runtime.IterableUtils.count(IterableUtils.java:51)\n\tat jetbrains.mps.internal.collections.runtime.Sequence.count(Sequence.java:180)\n\tat jetbrains.teamsys.dnq.runtime.queries.QueryOperations.getSize(QueryOperations.java:86)\n\tat jetbrains.charisma.smartui.persistent.IssueChangeImpl.countNewComments(IssueChangeImpl.java:61)\n\tat jetbrains.charisma.smartui.persistent.IssueChangeImpl.getNewCommentsCount(IssueChangeImpl.java:57)\n\tat jetbrains.charisma.smartui.comments.IssueCommentsTitle_HtmlTemplateComponent$1.invoke(IssueCommentsTitle_HtmlTemplateComponent.java:67)\n\tat jetbrains.charisma.smartui.comments.IssueCommentsTitle_HtmlTemplateComponent$1.invoke(IssueCommentsTitle_HtmlTemplateComponent.java:55)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:466)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.issueDetailLevel.IssueCommentsToggler_HtmlTemplateComponent.renderTemplate(IssueCommentsToggler_HtmlTemplateComponent.java:80)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.issueDetailLevel.IssuePropertiesNew_HtmlTemplateComponent.renderTemplate(IssuePropertiesNew_HtmlTemplateComponent.java:196)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.issueDetailLevel.ViewIssueNew_HtmlTemplateComponent.renderTemplate(ViewIssueNew_HtmlTemplateComponent.java:646)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.content.IssueItem_HtmlTemplateComponent.renderTemplate(IssueItem_HtmlTemplateComponent.java:353)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.content.IssueList_HtmlTemplateComponent.renderTemplate(IssueList_HtmlTemplateComponent.java:407)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.content.IssuesContent_HtmlTemplateComponent.renderTemplate(IssuesContent_HtmlTemplateComponent.java:248)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.workspace.Issues_RootHtmlTemplateComponent.renderTemplate(Issues_RootHtmlTemplateComponent.java:519)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.layout.SmartUI_LayoutComponent.renderTemplate(SmartUI_LayoutComponent.java:385)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.render(TemplateComponent.java:389)\n\tat jetbrains.mps.webr.runtime.requestProcessor.ResponseFactory$2.doAction(ResponseFactory.java:79)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.executeResponseAction(MainServlet.java:174)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:125)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:617)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:717)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:290)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:235)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:118)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:235)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:235)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206)\n\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:233)\n\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:191)\n\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:127)\n\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:102)\n\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:109)\n\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:298)\n\tat org.apache.coyote.http11.Http11AprProcessor.process(Http11AprProcessor.java:859)\n\tat org.apache.coyote.http11.Http11AprProtocol$Http11ConnectionHandler.process(Http11AprProtocol.java:579)\n\tat org.apache.tomcat.util.net.AprEndpoint$Worker.run(AprEndpoint.java:1555)\n\tat java.lang.Thread.run(Unknown Source)\n\n\n===Environment details===\nhost: WJV-YTAPP01.extendhealth.com\nbase url: http://youtrack.extendhealth.com\nversion: 5.1\nbuild: 8447 [13-Feb-2014 14:10] \njava.version: 1.6.0_20\njava.vendor: Sun Microsystems Inc.\njava.vm.specification.version: 1.0\njava.vm.specification.vendor: Sun Microsystems Inc.\njava.vm.specification.name: Java Virtual Machine Specification\njava.vm.version: 16.3-b01\njava.vm.vendor: Sun Microsystems Inc.\njava.vm.name: Java HotSpot(TM) Server VM\njava.specification.version: 1.6\njava.specification.vendor: Sun Microsystems Inc.\njava.specification.name: Java Platform API Specification\njava.class.version: 50.0\nos.name: Windows Server 2008 R2\nos.arch: x86\nos.version: 6.1\nMax memory: 1 GB (1461321728 bytes)\nFree memory: 113 MB (118759248 bytes)\nTotal memory: 1 GB (1461321728 bytes)\nAvailable processors: 4\nThrown at: Tuesday, September 16, 2014 2:49:40 PM MDT"
    }, {"name": "created", "value": "1410900608847"}, {
        "name": "updated",
        "value": "1410948865726"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "resolved", "value": "1410948865743"}, {
        "name": "reporterName",
        "value": "app_exception"
    }, {"name": "reporterFullName", "value": "Exception Robot"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "duplicates", "value": "JT-25398"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Duplicate"],
        "valueId": ["Duplicate"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Affected versions",
        "value": ["5.1"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-25293",
    "entityId": "25-709832",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "25293"
    }, {"name": "summary", "value": "Configuration Wizard: ask for language"}, {
        "name": "created",
        "value": "1403372950091"
    }, {"name": "updated", "value": "1410948032398"}, {
        "name": "updaterName",
        "value": "smandreev"
    }, {"name": "updaterFullName", "value": "Sergei Andreev"}, {
        "name": "resolved",
        "value": "1407144651207"
    }, {"name": "reporterName", "value": "shalupov"}, {
        "name": "reporterFullName",
        "value": "Leonid Shalupov"
    }, {"name": "commentsCount", "value": "9"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-24842"}]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Task"], "valueId": ["Task"]}, {
        "name": "State",
        "value": ["Verified"],
        "valueId": ["Verified"],
        "color": {"bg": "#339933", "fg": "white"}
    }, {"name": "Assignee", "value": [{"fullName": "Alexander Anisimov", "value": "xi-eye"}]}, {
        "name": "Subsystem",
        "value": ["Installer"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Fixed in builds",
        "value": ["10814"],
        "valueId": []
    }, {"name": "Verified in build", "value": ["11485"], "valueId": []}, {
        "name": "Verified by",
        "value": [{"fullName": "Sergei Andreev", "value": "smandreev"}]
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [{
        "id": "27-765644",
        "author": "shalupov",
        "authorFullName": "Leonid Shalupov",
        "issueId": "JT-25293",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "for Hub AND YouTrack",
        "shownForIssueAuthor": false,
        "created": 1405004777294,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-768406",
        "author": "Alexey_Barsov",
        "authorFullName": "Alexey Barsov",
        "issueId": "JT-25293",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "All UI changes might be done in scope of this issue, additionally I have created related server side task BND-186",
        "shownForIssueAuthor": false,
        "created": 1405503269947,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-770865",
        "author": "Evgeny_Naumenko",
        "authorFullName": "Evgeny Naumenko",
        "issueId": "JT-25293",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "YouTrack now supports locale configuration from java -D property. \n\nProperty name: \"jetbrains.youtrack.locale\"\nProperty values: conventional java locale shortcuts (language_country), clean YT installation supports \"en_us\", \"de_de\", \"es_es\", \"fr_fr\", \"ru_ru\" ",
        "shownForIssueAuthor": false,
        "created": 1405955091510,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-771172",
        "author": "Evgeny_Naumenko",
        "authorFullName": "Evgeny Naumenko",
        "issueId": "JT-25293",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "For hub language can be set via jetbrains.jetpass.language: http://confluence.jetbrains.com/display/HUB/Configuration+parameters+as+table",
        "shownForIssueAuthor": false,
        "created": 1406017548397,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-776198",
        "author": "Alexey_Barsov",
        "authorFullName": "Alexey Barsov",
        "issueId": "JT-25293",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "To the moment Hub support localization based on language, but later it will support locales either: https://jetpass.myjetbrains.com/youtrack/issue/JPS-1599",
        "shownForIssueAuthor": false,
        "created": 1406804243885,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-776330",
        "author": "Alexey_Barsov",
        "authorFullName": "Alexey Barsov",
        "issueId": "JT-25293",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "REST methos /api/wizard/youtrack/locales returns the list of locales in IETF BCP 47 language tag format. Chosen locale must be set into property *bundle.locale*",
        "shownForIssueAuthor": false,
        "created": 1406812844445,
        "updated": 1406813122616,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-777412",
        "author": "Evgeny_Naumenko",
        "authorFullName": "Evgeny Naumenko",
        "issueId": "JT-25293",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "It would be nice to accompany language chooser with flag icons",
        "shownForIssueAuthor": false,
        "created": 1407134729540,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-777492",
        "author": "xi-eye",
        "authorFullName": "Alexander Anisimov",
        "issueId": "JT-25293",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "I'd rather prefer to have another cosmetic issue for the presentation improvements",
        "shownForIssueAuthor": false,
        "created": 1407144422923,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-777496",
        "author": "Evgeny_Naumenko",
        "authorFullName": "Evgeny Naumenko",
        "issueId": "JT-25293",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "here you are: BND-205",
        "shownForIssueAuthor": false,
        "created": 1407144645716,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-24632",
    "entityId": "25-692624",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "24632"
    }, {"name": "summary", "value": "Can't write to file"}, {
        "name": "description",
        "value": "jetbrains.exodus.exceptions.ExodusException: Can't write to file\n\tat jetbrains.exodus.io.FileDataWriter.write(FileDataWriter.java:38)\n\tat jetbrains.exodus.log.BufferedDataWriter.flush(BufferedDataWriter.java:155)\n\tat jetbrains.exodus.log.Log.flush(Log.java:538)\n\tat jetbrains.exodus.log.Log.flush(Log.java:534)\n\tat jetbrains.exodus.env.MetaTree.saveMetaTree(MetaTree.java:120)\n\tat jetbrains.exodus.env.TransactionImpl.doCommit(TransactionImpl.java:198)\n\tat jetbrains.exodus.env.EnvironmentImpl.flushTransaction(EnvironmentImpl.java:465)\n\tat jetbrains.exodus.env.TransactionImpl.flush(TransactionImpl.java:95)\n\tat jetbrains.exodus.database.PersistentStoreTransaction.doFlush(PersistentStoreTransaction.java:143)\n\tat jetbrains.exodus.database.PersistentStoreTransaction.flush(PersistentStoreTransaction.java:136)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl.flushChanges(TransientSessionImpl.java:740)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl.flush(TransientSessionImpl.java:159)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateActionController.handleEventImpl(TemplateActionController.java:141)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateActionController.handleEvent(TemplateActionController.java:115)\n\tat jetbrains.mps.webr.runtime.requestProcessor.EventRequestProcessor.processRequest(EventRequestProcessor.java:75)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.processRequest(MainServlet.java:228)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:114)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doPost(MainServlet.java:192)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:754)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:847)\n\tat org.eclipse.jetty.servlet.ServletHolder.handle(ServletHolder.java:648)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1336)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:453)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:137)\n\tat org.eclipse.jetty.security.SecurityHandler.handle(SecurityHandler.java:559)\n\tat org.eclipse.jetty.server.session.SessionHandler.doHandle(SessionHandler.java:231)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1072)\n\tat org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:382)\n\tat org.eclipse.jetty.server.session.SessionHandler.doScope(SessionHandler.java:193)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1006)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:135)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:116)\n\tat org.eclipse.jetty.server.Server.handle(Server.java:365)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.handleRequest(AbstractHttpConnection.java:485)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.content(AbstractHttpConnection.java:937)\n\tat org.eclipse.jetty.server.AbstractHttpConnection$RequestHandler.content(AbstractHttpConnection.java:998)\n\tat org.eclipse.jetty.http.HttpParser.parseNext(HttpParser.java:856)\n\tat org.eclipse.jetty.http.HttpParser.parseAvailable(HttpParser.java:240)\n\tat org.eclipse.jetty.server.AsyncHttpConnection.handle(AsyncHttpConnection.java:82)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint.handle(SelectChannelEndPoint.java:627)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint$1.run(SelectChannelEndPoint.java:51)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:608)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool$3.run(QueuedThreadPool.java:543)\n\tat java.lang.Thread.run(Thread.java:724)\nCaused by: java.io.IOException: Disk quota exceeded\n\tat java.io.RandomAccessFile.writeBytes(Native Method)\n\tat java.io.RandomAccessFile.write(RandomAccessFile.java:499)\n\tat jetbrains.exodus.io.FileDataWriter.write(FileDataWriter.java:33)\n\t... 50 more\n\n\n===Environment details===\nhost: VDS-FLTT.aviasg.local\nbase url: http://bugs.desk.fltechnicstraining.com\nversion: 5.0.5\nbuild: 7527 [28-Oct-2013 19:43] \njava.version: 1.7.0_25\njava.vendor: Oracle Corporation\njava.vm.specification.version: 1.7\njava.vm.specification.vendor: Oracle Corporation\njava.vm.specification.name: Java Virtual Machine Specification\njava.vm.version: 23.7-b01\njava.vm.vendor: Oracle Corporation\njava.vm.name: OpenJDK Client VM\njava.specification.version: 1.7\njava.specification.vendor: Oracle Corporation\njava.specification.name: Java Platform API Specification\njava.class.version: 51.0\nos.name: Linux\nos.arch: i386\nos.version: 3.2.0-4-686-pae\nMax memory: 1 GB (1603928064 bytes)\nFree memory: 902 MB (945884104 bytes)\nTotal memory: 1 GB (1603928064 bytes)\nAvailable processors: 1\nThrown at: Friday, April 25, 2014 2:12:44 PM EEST"
    }, {"name": "created", "value": "1398424376776"}, {
        "name": "updated",
        "value": "1410947137528"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "resolved", "value": "1398667272326"}, {
        "name": "reporterName",
        "value": "app_exception"
    }, {"name": "reporterFullName", "value": "Exception Robot"}, {
        "name": "commentsCount",
        "value": "1"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "is duplicated by", "value": "JT-26473"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-26474"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-26475"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Invalid"],
        "valueId": ["Invalid"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Affected versions",
        "value": ["5.0.5"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [{
        "id": "27-726830",
        "author": "Alexander.Volfman",
        "authorFullName": "Alexander Volfman",
        "issueId": "JT-24632",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Environmental failure. Please search for java.io.IOException: Disk quota exceeded.",
        "shownForIssueAuthor": false,
        "created": 1398667272361,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26473",
    "entityId": "25-747369",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26473"
    }, {"name": "summary", "value": "Can't write to file"}, {
        "name": "description",
        "value": "jetbrains.exodus.exceptions.ExodusException: Can't write to file\n\tat jetbrains.exodus.io.FileDataWriter.write(FileDataWriter.java:53)\n\tat jetbrains.exodus.log.BufferedDataWriter.flush(BufferedDataWriter.java:175)\n\tat jetbrains.exodus.log.Log.flush(Log.java:544)\n\tat jetbrains.exodus.log.Log.flush(Log.java:539)\n\tat jetbrains.exodus.env.MetaTree.saveMetaTree(MetaTree.java:135)\n\tat jetbrains.exodus.env.TransactionImpl.doCommit(TransactionImpl.java:213)\n\tat jetbrains.exodus.env.EnvironmentImpl.flushTransaction(EnvironmentImpl.java:465)\n\tat jetbrains.exodus.env.TransactionImpl.flush(TransactionImpl.java:111)\n\tat jetbrains.exodus.database.PersistentStoreTransaction.doFlush(PersistentStoreTransaction.java:190)\n\tat jetbrains.exodus.database.PersistentStoreTransaction.flush(PersistentStoreTransaction.java:183)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl.flushChanges(TransientSessionImpl.java:699)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl.flush(TransientSessionImpl.java:164)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateActionController.handleEventImpl(TemplateActionController.java:146)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateActionController.handleEvent(TemplateActionController.java:120)\n\tat jetbrains.mps.webr.runtime.requestProcessor.EventRequestProcessor.processRequest(EventRequestProcessor.java:75)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.processRequest(MainServlet.java:252)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:138)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doPost(MainServlet.java:216)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:754)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:847)\n\tat org.eclipse.jetty.servlet.ServletHolder.handle(ServletHolder.java:648)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1336)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:453)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:137)\n\tat org.eclipse.jetty.security.SecurityHandler.handle(SecurityHandler.java:559)\n\tat org.eclipse.jetty.server.session.SessionHandler.doHandle(SessionHandler.java:231)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1072)\n\tat org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:382)\n\tat org.eclipse.jetty.server.session.SessionHandler.doScope(SessionHandler.java:193)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1006)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:135)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:116)\n\tat org.eclipse.jetty.server.Server.handle(Server.java:365)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.handleRequest(AbstractHttpConnection.java:485)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.content(AbstractHttpConnection.java:937)\n\tat org.eclipse.jetty.server.AbstractHttpConnection$RequestHandler.content(AbstractHttpConnection.java:998)\n\tat org.eclipse.jetty.http.HttpParser.parseNext(HttpParser.java:856)\n\tat org.eclipse.jetty.http.HttpParser.parseAvailable(HttpParser.java:240)\n\tat org.eclipse.jetty.server.AsyncHttpConnection.handle(AsyncHttpConnection.java:82)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint.handle(SelectChannelEndPoint.java:627)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint$1.run(SelectChannelEndPoint.java:51)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:608)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool$3.run(QueuedThreadPool.java:543)\n\tat java.lang.Thread.run(Thread.java:745)\nCaused by: java.io.IOException: No space left on device\n\tat java.io.RandomAccessFile.writeBytes(Native Method)\n\tat java.io.RandomAccessFile.write(RandomAccessFile.java:493)\n\tat jetbrains.exodus.io.FileDataWriter.write(FileDataWriter.java:48)\n\t... 50 more\n\n\n===Environment details===\nhost: ip-10-231-169-230.ec2.internal\nbase url: http://youtrack.getu.com\nversion: 5.2.1\nbuild: 8778 [22-May-2014 16:00] \njava.version: 1.8.0_05\njava.vendor: Oracle Corporation\njava.vm.specification.version: 1.8\njava.vm.specification.vendor: Oracle Corporation\njava.vm.specification.name: Java Virtual Machine Specification\njava.vm.version: 25.5-b02\njava.vm.vendor: Oracle Corporation\njava.vm.name: Java HotSpot(TM) 64-Bit Server VM\njava.specification.version: 1.8\njava.specification.vendor: Oracle Corporation\njava.specification.name: Java Platform API Specification\njava.class.version: 52.0\nos.name: Linux\nos.arch: amd64\nos.version: 3.13.0-24-generic\nMax memory: 1 GB (1908932608 bytes)\nFree memory: 73 MB (76707960 bytes)\nTotal memory: 804 MB (843055104 bytes)\nAvailable processors: 2\nThrown at: Wednesday, September 17, 2014 9:21:37 AM UTC"
    }, {"name": "created", "value": "1410945778200"}, {
        "name": "updated",
        "value": "1410947137500"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "resolved", "value": "1410947137514"}, {
        "name": "reporterName",
        "value": "app_exception"
    }, {"name": "reporterFullName", "value": "Exception Robot"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "duplicates", "value": "JT-24632"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Duplicate"],
        "valueId": ["Duplicate"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Affected versions",
        "value": ["5.2.1"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26474",
    "entityId": "25-747370",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26474"
    }, {"name": "summary", "value": "Can't write to file"}, {
        "name": "description",
        "value": "jetbrains.exodus.exceptions.ExodusException: Can't write to file\n\tat jetbrains.exodus.io.FileDataWriter.write(FileDataWriter.java:53)\n\tat jetbrains.exodus.log.BufferedDataWriter.flush(BufferedDataWriter.java:175)\n\tat jetbrains.exodus.log.Log.flush(Log.java:544)\n\tat jetbrains.exodus.log.Log.flush(Log.java:539)\n\tat jetbrains.exodus.env.MetaTree.saveMetaTree(MetaTree.java:135)\n\tat jetbrains.exodus.env.TransactionImpl.doCommit(TransactionImpl.java:213)\n\tat jetbrains.exodus.env.EnvironmentImpl.flushTransaction(EnvironmentImpl.java:465)\n\tat jetbrains.exodus.env.TransactionImpl.flush(TransactionImpl.java:111)\n\tat jetbrains.exodus.database.PersistentStoreTransaction.doFlush(PersistentStoreTransaction.java:190)\n\tat jetbrains.exodus.database.PersistentStoreTransaction.flush(PersistentStoreTransaction.java:183)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl.flushChanges(TransientSessionImpl.java:699)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl.flush(TransientSessionImpl.java:164)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateActionController.handleEventImpl(TemplateActionController.java:146)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateActionController.handleEvent(TemplateActionController.java:120)\n\tat jetbrains.mps.webr.runtime.requestProcessor.EventRequestProcessor.processRequest(EventRequestProcessor.java:75)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.processRequest(MainServlet.java:252)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:138)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doPost(MainServlet.java:216)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:754)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:847)\n\tat org.eclipse.jetty.servlet.ServletHolder.handle(ServletHolder.java:648)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1336)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:453)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:137)\n\tat org.eclipse.jetty.security.SecurityHandler.handle(SecurityHandler.java:559)\n\tat org.eclipse.jetty.server.session.SessionHandler.doHandle(SessionHandler.java:231)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1072)\n\tat org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:382)\n\tat org.eclipse.jetty.server.session.SessionHandler.doScope(SessionHandler.java:193)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1006)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:135)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:116)\n\tat org.eclipse.jetty.server.Server.handle(Server.java:365)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.handleRequest(AbstractHttpConnection.java:485)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.content(AbstractHttpConnection.java:937)\n\tat org.eclipse.jetty.server.AbstractHttpConnection$RequestHandler.content(AbstractHttpConnection.java:998)\n\tat org.eclipse.jetty.http.HttpParser.parseNext(HttpParser.java:856)\n\tat org.eclipse.jetty.http.HttpParser.parseAvailable(HttpParser.java:240)\n\tat org.eclipse.jetty.server.AsyncHttpConnection.handle(AsyncHttpConnection.java:82)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint.handle(SelectChannelEndPoint.java:627)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint$1.run(SelectChannelEndPoint.java:51)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:608)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool$3.run(QueuedThreadPool.java:543)\n\tat java.lang.Thread.run(Thread.java:745)\nCaused by: java.io.IOException: No space left on device\n\tat java.io.RandomAccessFile.writeBytes(Native Method)\n\tat java.io.RandomAccessFile.write(RandomAccessFile.java:493)\n\tat jetbrains.exodus.io.FileDataWriter.write(FileDataWriter.java:48)\n\t... 50 more\n\n\n===Environment details===\nhost: ip-10-231-169-230.ec2.internal\nbase url: http://youtrack.getu.com\nversion: 5.2.1\nbuild: 8778 [22-May-2014 16:00] \njava.version: 1.8.0_05\njava.vendor: Oracle Corporation\njava.vm.specification.version: 1.8\njava.vm.specification.vendor: Oracle Corporation\njava.vm.specification.name: Java Virtual Machine Specification\njava.vm.version: 25.5-b02\njava.vm.vendor: Oracle Corporation\njava.vm.name: Java HotSpot(TM) 64-Bit Server VM\njava.specification.version: 1.8\njava.specification.vendor: Oracle Corporation\njava.specification.name: Java Platform API Specification\njava.class.version: 52.0\nos.name: Linux\nos.arch: amd64\nos.version: 3.13.0-24-generic\nMax memory: 1 GB (1908932608 bytes)\nFree memory: 73 MB (76707960 bytes)\nTotal memory: 804 MB (843055104 bytes)\nAvailable processors: 2\nThrown at: Wednesday, September 17, 2014 9:21:37 AM UTC"
    }, {"name": "created", "value": "1410945783616"}, {
        "name": "updated",
        "value": "1410947123857"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "resolved", "value": "1410947123874"}, {
        "name": "reporterName",
        "value": "app_exception"
    }, {"name": "reporterFullName", "value": "Exception Robot"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "duplicates", "value": "JT-24632"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Duplicate"],
        "valueId": ["Duplicate"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Affected versions",
        "value": ["5.2.1"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26475",
    "entityId": "25-747371",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26475"
    }, {"name": "summary", "value": "Can't write to file"}, {
        "name": "description",
        "value": "jetbrains.exodus.exceptions.ExodusException: Can't write to file\n\tat jetbrains.exodus.io.FileDataWriter.write(FileDataWriter.java:53)\n\tat jetbrains.exodus.log.BufferedDataWriter.flush(BufferedDataWriter.java:175)\n\tat jetbrains.exodus.log.Log.flush(Log.java:544)\n\tat jetbrains.exodus.log.Log.flush(Log.java:539)\n\tat jetbrains.exodus.env.MetaTree.saveMetaTree(MetaTree.java:135)\n\tat jetbrains.exodus.env.TransactionImpl.doCommit(TransactionImpl.java:213)\n\tat jetbrains.exodus.env.EnvironmentImpl.flushTransaction(EnvironmentImpl.java:465)\n\tat jetbrains.exodus.env.TransactionImpl.flush(TransactionImpl.java:111)\n\tat jetbrains.exodus.database.PersistentStoreTransaction.doFlush(PersistentStoreTransaction.java:190)\n\tat jetbrains.exodus.database.PersistentStoreTransaction.flush(PersistentStoreTransaction.java:183)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl.flushChanges(TransientSessionImpl.java:699)\n\tat com.jetbrains.teamsys.dnq.database.TransientSessionImpl.flush(TransientSessionImpl.java:164)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateActionController.handleEventImpl(TemplateActionController.java:146)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateActionController.handleEvent(TemplateActionController.java:120)\n\tat jetbrains.mps.webr.runtime.requestProcessor.EventRequestProcessor.processRequest(EventRequestProcessor.java:75)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.processRequest(MainServlet.java:252)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:138)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doPost(MainServlet.java:216)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:754)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:847)\n\tat org.eclipse.jetty.servlet.ServletHolder.handle(ServletHolder.java:648)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1336)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:453)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:137)\n\tat org.eclipse.jetty.security.SecurityHandler.handle(SecurityHandler.java:559)\n\tat org.eclipse.jetty.server.session.SessionHandler.doHandle(SessionHandler.java:231)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1072)\n\tat org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:382)\n\tat org.eclipse.jetty.server.session.SessionHandler.doScope(SessionHandler.java:193)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1006)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:135)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:116)\n\tat org.eclipse.jetty.server.Server.handle(Server.java:365)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.handleRequest(AbstractHttpConnection.java:485)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.content(AbstractHttpConnection.java:937)\n\tat org.eclipse.jetty.server.AbstractHttpConnection$RequestHandler.content(AbstractHttpConnection.java:998)\n\tat org.eclipse.jetty.http.HttpParser.parseNext(HttpParser.java:856)\n\tat org.eclipse.jetty.http.HttpParser.parseAvailable(HttpParser.java:240)\n\tat org.eclipse.jetty.server.AsyncHttpConnection.handle(AsyncHttpConnection.java:82)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint.handle(SelectChannelEndPoint.java:627)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint$1.run(SelectChannelEndPoint.java:51)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:608)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool$3.run(QueuedThreadPool.java:543)\n\tat java.lang.Thread.run(Thread.java:745)\nCaused by: java.io.IOException: No space left on device\n\tat java.io.RandomAccessFile.writeBytes(Native Method)\n\tat java.io.RandomAccessFile.write(RandomAccessFile.java:493)\n\tat jetbrains.exodus.io.FileDataWriter.write(FileDataWriter.java:48)\n\t... 50 more\n\n\n===Environment details===\nhost: ip-10-231-169-230.ec2.internal\nbase url: http://youtrack.getu.com\nversion: 5.2.1\nbuild: 8778 [22-May-2014 16:00] \njava.version: 1.8.0_05\njava.vendor: Oracle Corporation\njava.vm.specification.version: 1.8\njava.vm.specification.vendor: Oracle Corporation\njava.vm.specification.name: Java Virtual Machine Specification\njava.vm.version: 25.5-b02\njava.vm.vendor: Oracle Corporation\njava.vm.name: Java HotSpot(TM) 64-Bit Server VM\njava.specification.version: 1.8\njava.specification.vendor: Oracle Corporation\njava.specification.name: Java Platform API Specification\njava.class.version: 52.0\nos.name: Linux\nos.arch: amd64\nos.version: 3.13.0-24-generic\nMax memory: 1 GB (1908932608 bytes)\nFree memory: 266 MB (279172624 bytes)\nTotal memory: 1014 MB (1063256064 bytes)\nAvailable processors: 2\nThrown at: Wednesday, September 17, 2014 9:22:04 AM UTC"
    }, {"name": "created", "value": "1410945795944"}, {
        "name": "updated",
        "value": "1410947108226"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "resolved", "value": "1410947108243"}, {
        "name": "reporterName",
        "value": "app_exception"
    }, {"name": "reporterFullName", "value": "Exception Robot"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "duplicates", "value": "JT-24632"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Duplicate"],
        "valueId": ["Duplicate"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Affected versions",
        "value": ["5.2.1"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26179",
    "entityId": "25-735452",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26179"
    }, {
        "name": "summary",
        "value": "Add ability to add query from your saved search to issues widget"
    }, {
        "name": "description",
        "value": "!Снимок экрана 2014-08-26 в 14.01.12.png!\n\nТак же при редактировании и добавлении виджета у карточки должна быть:\n— обводка в один пиксель цветом #25b7ff\n— тень: цвет #25b7ff, непрозрачность: 50%, размер тени: 8px"
    }, {"name": "created", "value": "1409047719754"}, {
        "name": "updated",
        "value": "1410946650196"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "reporterName", "value": "artemtiunov"}, {
        "name": "reporterFullName",
        "value": "Artem Tiunov"
    }, {"name": "commentsCount", "value": "4"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-7082"}]
    }, {
        "name": "Priority",
        "value": ["Major"],
        "valueId": ["Major"],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Task"], "valueId": ["Task"]}, {
        "name": "State",
        "value": ["In Progress"],
        "valueId": ["In Progress"],
        "color": {"bg": "#00a1b4", "fg": "white"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Ekaterina Zaikina", "value": "Ekaterina.Zaikina"}]
    }, {
        "name": "Subsystem",
        "value": ["Dashboard"],
        "valueId": [],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {"name": "Fix versions", "value": ["Harmonicity IX"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-182882",
            "url": "https://youtrack.jetbrains.com/_persistent/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202014-08-26%20%D0%B2%2014.01.12.png?file=74-182882&v=0&c=true",
            "value": "Снимок экрана 2014-08-26 в 14.01.12.png"
        }]
    }],
    "comment": [{
        "id": "27-789127",
        "author": "artemtiunov",
        "authorFullName": "Artem Tiunov",
        "issueId": "JT-26179",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "@valerie.andrianova Лер, нужен текст для заголовка",
        "shownForIssueAuthor": false,
        "created": 1409047755336,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-789197",
        "author": "valerie.andrianova",
        "authorFullName": "valerie andrianova",
        "issueId": "JT-26179",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "@artemtiunov, Type search query or choose saved search ",
        "shownForIssueAuthor": false,
        "created": 1409052839563,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-789200",
        "author": "valerie.andrianova",
        "authorFullName": "valerie andrianova",
        "issueId": "JT-26179",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "@artemtiunov,я думаю проще объяснить, что нужно сделать, чем придумать хорошее название. Так ок?  ",
        "shownForIssueAuthor": false,
        "created": 1409052904773,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-789203",
        "author": "artemtiunov",
        "authorFullName": "Artem Tiunov",
        "issueId": "JT-26179",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "@valerie.andrianova да-да, отлично!",
        "shownForIssueAuthor": false,
        "created": 1409053034649,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26463",
    "entityId": "25-747068",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26463"
    }, {
        "name": "summary",
        "value": "Wizard page not opened in browser after yt+hub bundle started from zip file under Ubuntu"
    }, {"name": "created", "value": "1410886725186"}, {
        "name": "updated",
        "value": "1410945696194"
    }, {"name": "updaterName", "value": "smandreev"}, {
        "name": "updaterFullName",
        "value": "Sergei Andreev"
    }, {"name": "reporterName", "value": "smandreev"}, {
        "name": "reporterFullName",
        "value": "Sergei Andreev"
    }, {"name": "commentsCount", "value": "2"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-24842"}]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Task"], "valueId": ["Task"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [{
        "id": "27-801298",
        "author": "Evgeny_Naumenko",
        "authorFullName": "Evgeny Naumenko",
        "issueId": "JT-26463",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "As far as I rememder it was designed this way",
        "shownForIssueAuthor": false,
        "created": 1410891502771,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-801544",
        "author": "smandreev",
        "authorFullName": "Sergei Andreev",
        "issueId": "JT-26463",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "NOTE: In Windows and Mac OS X it works",
        "shownForIssueAuthor": false,
        "created": 1410945696203,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26436",
    "entityId": "25-746213",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26436"
    }, {"name": "summary", "value": "TeamCity intergration active after delete"}, {
        "name": "description",
        "value": "What steps will reproduce the problem?\n1. In teamcity we have 2 build configuration under same project (in SVN)\n*trunk\n*brancheXYZ\n2. teamCity Intergration was working with the Mapping for the trunk build\n3. Then we created second Mapping for the brancheXYZ build\n4. But then we realized this is not the setup we like (commit commands were execuded twice - for each build mapping) \n5. The mapping for the brancheXYZ Build has been deleted\n\nWhat is the expected result?\nWe expected the Commit Commands from brancheXYZ build will no longer processed - after it has been deleted.\n\nWhat happens instead?\n*Commit Commands from brancheXYZ build are processed.\n*These are processed not at the specified (each 5 minutes) time but immediatelly (see attachmets).\n\nIt seems to me that the mapping has been marked as deleted, but is still processed!!!\n"
    }, {"name": "created", "value": "1410787130523"}, {
        "name": "updated",
        "value": "1410945340876"
    }, {"name": "updaterName", "value": "Alexander.Volfman"}, {
        "name": "updaterFullName",
        "value": "Alexander Volfman"
    }, {"name": "reporterName", "value": "Tomas_Bihary"}, {
        "name": "reporterFullName",
        "value": "tomas bihary"
    }, {"name": "commentsCount", "value": "1"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Alexander Volfman", "value": "Alexander.Volfman"}]
    }, {"name": "Subsystem", "value": ["TeamCity Integration"], "valueId": []}, {
        "name": "Affected versions",
        "value": ["5.2.1"],
        "valueId": []
    }, {"name": "Browser", "value": ["Chrome 37.x"], "valueId": ["Chrome 37.x"]}, {
        "name": "OS",
        "value": ["Windows 8"],
        "valueId": ["Windows 8"]
    }, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-185890",
            "url": "https://youtrack.jetbrains.com/_persistent/2014-09-15%2015_08_23-TeamCity%20Integration%20Settings%20_%20YouTrack.png?file=74-185890&v=0&c=true",
            "value": "2014-09-15 15_08_23-TeamCity Integration Settings _ YouTrack.png"
        }, {
            "id": "74-185891",
            "url": "https://youtrack.jetbrains.com/_persistent/2014-09-15%2015_10_47-AttachedTeamCityChanges.png?file=74-185891&v=0&c=true",
            "value": "2014-09-15 15_10_47-AttachedTeamCityChanges.png"
        }]
    }],
    "comment": [{
        "id": "27-801539",
        "author": "Alexander.Volfman",
        "authorFullName": "Alexander Volfman",
        "issueId": "JT-26436",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Hi Tomas,\nThis commits are processed not because you created and then removed the mapping. I believe you've set the TC configuration that corresponds to the mapping that remains in your YouTrack to process changes from branches like brancheXYZ. Could you please check if this is the case?\nAs for the check period. This sounds strange indeed. Do I get it rigth that you neither click 'Get changes now' link on TC changes tab of a YouTrack issue nor run the mapping configuration manualy?\n",
        "shownForIssueAuthor": false,
        "created": 1410945340886,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26472",
    "entityId": "25-747345",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26472"
    }, {"name": "summary", "value": "Shell scripts in zip archive don't have executable bit"}, {
        "name": "description",
        "value": "So, installation process can't be run immediately. You have to find all the scripts and set executable bit first."
    }, {"name": "created", "value": "1410944246087"}, {
        "name": "updated",
        "value": "1410944246087"
    }, {"name": "updaterName", "value": "alexander.buturlinov"}, {
        "name": "updaterFullName",
        "value": "Alexander Buturlinov"
    }, {"name": "reporterName", "value": "alexander.buturlinov"}, {
        "name": "reporterFullName",
        "value": "Alexander Buturlinov"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Evgeny Naumenko", "value": "Evgeny_Naumenko"}]
    }, {"name": "Subsystem", "value": ["Installer"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["6.0"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26402",
    "entityId": "25-744948",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26402"
    }, {
        "name": "summary",
        "value": "There's no current session to attach transient entity to."
    }, {
        "name": "description",
        "value": "java.lang.IllegalStateException: There's no current session to attach transient entity to.\n\tat com.jetbrains.teamsys.dnq.database.TransientStoreUtil.reattach(TransientStoreUtil.java:71)\n\tat com.jetbrains.teamsys.dnq.association.PrimitiveAssociationSemantics.get(PrimitiveAssociationSemantics.java:31)\n\tat com.jetbrains.teamsys.dnq.association.PrimitiveAssociationSemantics.get(PrimitiveAssociationSemantics.java:71)\n\tat jetbrains.charisma.persistence.user.UserImpl.isInGroup(UserImpl.java:771)\n\tat jetbrains.charisma.main.PerGroupFlagValue$1.accept(PerGroupFlagValue.java:39)\n\tat jetbrains.charisma.main.PerGroupFlagValue$1.accept(PerGroupFlagValue.java:37)\n\tat jetbrains.mps.internal.collections.runtime.IWhereFilter.invoke(IWhereFilter.java:14)\n\tat jetbrains.mps.internal.collections.runtime.IWhereFilter.invoke(IWhereFilter.java:7)\n\tat jetbrains.mps.internal.collections.runtime.impl.FilteringSequence$FilteringIterator.moveToNext(FilteringSequence.java:68)\n\tat jetbrains.mps.internal.collections.runtime.impl.FilteringSequence$FilteringIterator.hasNext(FilteringSequence.java:37)\n\tat jetbrains.mps.internal.collections.runtime.IterableUtils.isEmpty(IterableUtils.java:58)\n\tat jetbrains.mps.internal.collections.runtime.Sequence.isEmpty(Sequence.java:184)\n\tat jetbrains.teamsys.dnq.runtime.queries.QueryOperations.isEmpty(QueryOperations.java:127)\n\tat jetbrains.charisma.main.PerGroupFlagValue.isEnabled(PerGroupFlagValue.java:37)\n\tat jetbrains.charisma.main.AbstractFeatureFlag.isEnabled(AbstractFeatureFlag.java:28)\n\tat jetbrains.youtrack.imageTool.tool.AttachFileActionsTemplate.doRenderAttachFileActions(AttachFileActionsTemplate.java:37)\n\tat jetbrains.youtrack.imageTool.tool.AttachFileActionsTemplate.access$000(AttachFileActionsTemplate.java:23)\n\tat jetbrains.youtrack.imageTool.tool.AttachFileActionsTemplate$1.render(AttachFileActionsTemplate.java:67)\n\tat jetbrains.mps.webr.stateless.template.runtime.BaseTemplate.render(BaseTemplate.java:125)\n\tat jetbrains.youtrack.imageTool.tool.AttachFileActionsTemplate.render(AttachFileActionsTemplate.java:65)\n\tat jetbrains.mps.webr.stateless.template.runtime.BaseTemplate.render(BaseTemplate.java:118)\n\tat jetbrains.mps.webr.stateless.template.runtime.BaseTemplate.render(BaseTemplate.java:109)\n\tat jetbrains.mps.webr.stateless.template.runtime.BaseTemplate.renderToString(BaseTemplate.java:97)\n\tat jetbrains.youtrack.imageTool.stateful.AttachActions_HtmlTemplateComponent.renderTemplate(AttachActions_HtmlTemplateComponent.java:80)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.welcomeScreen.Dashboard_RootHtmlTemplateComponent.renderTemplate(Dashboard_RootHtmlTemplateComponent.java:232)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.welcomeScreen.DashboardLayout_LayoutComponent.renderTemplate(DashboardLayout_LayoutComponent.java:383)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.render(TemplateComponent.java:391)\n\tat jetbrains.mps.webr.runtime.requestProcessor.ResponseFactory$2.doAction(ResponseFactory.java:79)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.executeResponseAction(MainServlet.java:198)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:149)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:734)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:847)\n\tat org.eclipse.jetty.servlet.ServletHolder.handle(ServletHolder.java:648)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1336)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:453)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:137)\n\tat org.eclipse.jetty.security.SecurityHandler.handle(SecurityHandler.java:559)\n\tat org.eclipse.jetty.server.session.SessionHandler.doHandle(SessionHandler.java:231)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1072)\n\tat org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:382)\n\tat org.eclipse.jetty.server.session.SessionHandler.doScope(SessionHandler.java:193)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1006)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:135)\n\tat org.eclipse.jetty.server.handler.ContextHandlerCollection.handle(ContextHandlerCollection.java:224)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:116)\n\tat org.eclipse.jetty.server.Server.handle(Server.java:365)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.handleRequest(AbstractHttpConnection.java:485)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.headerComplete(AbstractHttpConnection.java:926)\n\tat org.eclipse.jetty.server.AbstractHttpConnection$RequestHandler.headerComplete(AbstractHttpConnection.java:988)\n\tat org.eclipse.jetty.http.HttpParser.parseNext(HttpParser.java:635)\n\tat org.eclipse.jetty.http.HttpParser.parseAvailable(HttpParser.java:235)\n\tat org.eclipse.jetty.server.AsyncHttpConnection.handle(AsyncHttpConnection.java:82)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint.handle(SelectChannelEndPoint.java:627)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint$1.run(SelectChannelEndPoint.java:51)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:608)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool$3.run(QueuedThreadPool.java:543)\n\tat java.lang.Thread.run(Thread.java:744)\n\n\n===Environment details===\nhost: ip-10-77-157-150.eu-west-1.compute.internal\nbase url: http://harmony-eap-sandbox.myjetbrains.com/youtrack\nversion: 6.0 EAP\nbuild: 11418 [11-Sep-2014 17:06] \njava.version: 1.7.0_51\njava.vendor: Oracle Corporation\njava.vm.specification.version: 1.7\njava.vm.specification.vendor: Oracle Corporation\njava.vm.specification.name: Java Virtual Machine Specification\njava.vm.version: 24.51-b03\njava.vm.vendor: Oracle Corporation\njava.vm.name: Java HotSpot(TM) Server VM\njava.specification.version: 1.7\njava.specification.vendor: Oracle Corporation\njava.specification.name: Java Platform API Specification\njava.class.version: 51.0\nos.name: Linux\nos.arch: i386\nos.version: 2.6.21.7-2.ec2.v1.2.fc8xen\nMax memory: 2 GB (2712928256 bytes)\nFree memory: 675 MB (708065872 bytes)\nTotal memory: 2 GB (2712928256 bytes)\nAvailable processors: 2\nThrown at: Friday, September 12, 2014 2:02:14 PM MSK"
    }, {"name": "created", "value": "1410516138986"}, {
        "name": "updated",
        "value": "1410940881418"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "resolved", "value": "1410940881433"}, {
        "name": "reporterName",
        "value": "app_exception"
    }, {"name": "reporterFullName", "value": "Exception Robot"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "duplicates", "value": "JT-26392"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Duplicate"],
        "valueId": ["Duplicate"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26464",
    "entityId": "25-747107",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26464"
    }, {
        "name": "summary",
        "value": "There's no current session to attach transient entity to."
    }, {
        "name": "description",
        "value": "java.lang.IllegalStateException: There's no current session to attach transient entity to.\n\tat com.jetbrains.teamsys.dnq.database.TransientStoreUtil.reattach(TransientStoreUtil.java:71)\n\tat com.jetbrains.teamsys.dnq.association.PrimitiveAssociationSemantics.get(PrimitiveAssociationSemantics.java:31)\n\tat com.jetbrains.teamsys.dnq.association.PrimitiveAssociationSemantics.get(PrimitiveAssociationSemantics.java:71)\n\tat jetbrains.charisma.persistence.user.UserImpl.isInGroup(UserImpl.java:771)\n\tat jetbrains.charisma.main.PerGroupFlagValue$1.accept(PerGroupFlagValue.java:39)\n\tat jetbrains.charisma.main.PerGroupFlagValue$1.accept(PerGroupFlagValue.java:37)\n\tat jetbrains.mps.internal.collections.runtime.IWhereFilter.invoke(IWhereFilter.java:14)\n\tat jetbrains.mps.internal.collections.runtime.IWhereFilter.invoke(IWhereFilter.java:7)\n\tat jetbrains.mps.internal.collections.runtime.impl.FilteringSequence$FilteringIterator.moveToNext(FilteringSequence.java:68)\n\tat jetbrains.mps.internal.collections.runtime.impl.FilteringSequence$FilteringIterator.hasNext(FilteringSequence.java:37)\n\tat jetbrains.mps.internal.collections.runtime.IterableUtils.isEmpty(IterableUtils.java:58)\n\tat jetbrains.mps.internal.collections.runtime.Sequence.isEmpty(Sequence.java:184)\n\tat jetbrains.teamsys.dnq.runtime.queries.QueryOperations.isEmpty(QueryOperations.java:127)\n\tat jetbrains.charisma.main.PerGroupFlagValue.isEnabled(PerGroupFlagValue.java:37)\n\tat jetbrains.charisma.main.AbstractFeatureFlag.isEnabled(AbstractFeatureFlag.java:28)\n\tat jetbrains.youtrack.imageTool.tool.AttachFileActionsTemplate.doRenderAttachFileActions(AttachFileActionsTemplate.java:37)\n\tat jetbrains.youtrack.imageTool.tool.AttachFileActionsTemplate.access$000(AttachFileActionsTemplate.java:23)\n\tat jetbrains.youtrack.imageTool.tool.AttachFileActionsTemplate$1.render(AttachFileActionsTemplate.java:67)\n\tat jetbrains.mps.webr.stateless.template.runtime.BaseTemplate.render(BaseTemplate.java:125)\n\tat jetbrains.youtrack.imageTool.tool.AttachFileActionsTemplate.render(AttachFileActionsTemplate.java:65)\n\tat jetbrains.mps.webr.stateless.template.runtime.BaseTemplate.render(BaseTemplate.java:118)\n\tat jetbrains.mps.webr.stateless.template.runtime.BaseTemplate.render(BaseTemplate.java:109)\n\tat jetbrains.mps.webr.stateless.template.runtime.BaseTemplate.renderToString(BaseTemplate.java:97)\n\tat jetbrains.youtrack.imageTool.stateful.AttachActions_HtmlTemplateComponent.renderTemplate(AttachActions_HtmlTemplateComponent.java:80)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.welcomeScreen.Dashboard_RootHtmlTemplateComponent.renderTemplate(Dashboard_RootHtmlTemplateComponent.java:232)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.welcomeScreen.DashboardLayout_LayoutComponent.renderTemplate(DashboardLayout_LayoutComponent.java:383)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.render(TemplateComponent.java:391)\n\tat jetbrains.mps.webr.runtime.requestProcessor.ResponseFactory$2.doAction(ResponseFactory.java:79)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.executeResponseAction(MainServlet.java:198)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:149)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:734)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:847)\n\tat org.eclipse.jetty.servlet.ServletHolder.handle(ServletHolder.java:648)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1336)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:453)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:137)\n\tat org.eclipse.jetty.security.SecurityHandler.handle(SecurityHandler.java:559)\n\tat org.eclipse.jetty.server.session.SessionHandler.doHandle(SessionHandler.java:231)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1072)\n\tat org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:382)\n\tat org.eclipse.jetty.server.session.SessionHandler.doScope(SessionHandler.java:193)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1006)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:135)\n\tat org.eclipse.jetty.server.handler.ContextHandlerCollection.handle(ContextHandlerCollection.java:224)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:116)\n\tat org.eclipse.jetty.server.Server.handle(Server.java:365)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.handleRequest(AbstractHttpConnection.java:485)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.headerComplete(AbstractHttpConnection.java:926)\n\tat org.eclipse.jetty.server.AbstractHttpConnection$RequestHandler.headerComplete(AbstractHttpConnection.java:988)\n\tat org.eclipse.jetty.http.HttpParser.parseNext(HttpParser.java:635)\n\tat org.eclipse.jetty.http.HttpParser.parseAvailable(HttpParser.java:235)\n\tat org.eclipse.jetty.server.AsyncHttpConnection.handle(AsyncHttpConnection.java:82)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint.handle(SelectChannelEndPoint.java:627)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint$1.run(SelectChannelEndPoint.java:51)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:608)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool$3.run(QueuedThreadPool.java:543)\n\tat java.lang.Thread.run(Thread.java:744)\n\n\n===Environment details===\nhost: ip-10-77-157-150.eu-west-1.compute.internal\nbase url: http://harmony-eap-sandbox.myjetbrains.com/youtrack\nversion: 6.0 EAP\nbuild: 11456 [15-Sep-2014 12:04] \njava.version: 1.7.0_51\njava.vendor: Oracle Corporation\njava.vm.specification.version: 1.7\njava.vm.specification.vendor: Oracle Corporation\njava.vm.specification.name: Java Virtual Machine Specification\njava.vm.version: 24.51-b03\njava.vm.vendor: Oracle Corporation\njava.vm.name: Java HotSpot(TM) Server VM\njava.specification.version: 1.7\njava.specification.vendor: Oracle Corporation\njava.specification.name: Java Platform API Specification\njava.class.version: 51.0\nos.name: Linux\nos.arch: i386\nos.version: 2.6.21.7-2.ec2.v1.2.fc8xen\nMax memory: 2 GB (2712928256 bytes)\nFree memory: 1 GB (1365454928 bytes)\nTotal memory: 2 GB (2712928256 bytes)\nAvailable processors: 2\nThrown at: Tuesday, September 16, 2014 10:33:11 PM MSK"
    }, {"name": "created", "value": "1410892396183"}, {
        "name": "updated",
        "value": "1410940823611"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "resolved", "value": "1410940823630"}, {
        "name": "reporterName",
        "value": "app_exception"
    }, {"name": "reporterFullName", "value": "Exception Robot"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "duplicates", "value": "JT-26392"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Duplicate"],
        "valueId": ["Duplicate"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26466",
    "entityId": "25-747138",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26466"
    }, {
        "name": "summary",
        "value": "There's no current session to attach transient entity to."
    }, {
        "name": "description",
        "value": "java.lang.IllegalStateException: There's no current session to attach transient entity to.\n\tat com.jetbrains.teamsys.dnq.database.TransientStoreUtil.reattach(TransientStoreUtil.java:71)\n\tat com.jetbrains.teamsys.dnq.association.PrimitiveAssociationSemantics.get(PrimitiveAssociationSemantics.java:31)\n\tat com.jetbrains.teamsys.dnq.association.PrimitiveAssociationSemantics.get(PrimitiveAssociationSemantics.java:71)\n\tat jetbrains.charisma.persistence.user.UserImpl.isInGroup(UserImpl.java:771)\n\tat jetbrains.charisma.main.PerGroupFlagValue$1.accept(PerGroupFlagValue.java:39)\n\tat jetbrains.charisma.main.PerGroupFlagValue$1.accept(PerGroupFlagValue.java:37)\n\tat jetbrains.mps.internal.collections.runtime.IWhereFilter.invoke(IWhereFilter.java:14)\n\tat jetbrains.mps.internal.collections.runtime.IWhereFilter.invoke(IWhereFilter.java:7)\n\tat jetbrains.mps.internal.collections.runtime.impl.FilteringSequence$FilteringIterator.moveToNext(FilteringSequence.java:68)\n\tat jetbrains.mps.internal.collections.runtime.impl.FilteringSequence$FilteringIterator.hasNext(FilteringSequence.java:37)\n\tat jetbrains.mps.internal.collections.runtime.IterableUtils.isEmpty(IterableUtils.java:58)\n\tat jetbrains.mps.internal.collections.runtime.Sequence.isEmpty(Sequence.java:184)\n\tat jetbrains.teamsys.dnq.runtime.queries.QueryOperations.isEmpty(QueryOperations.java:127)\n\tat jetbrains.charisma.main.PerGroupFlagValue.isEnabled(PerGroupFlagValue.java:37)\n\tat jetbrains.charisma.main.AbstractFeatureFlag.isEnabled(AbstractFeatureFlag.java:28)\n\tat jetbrains.youtrack.imageTool.tool.AttachFileActionsTemplate.doRenderAttachFileActions(AttachFileActionsTemplate.java:37)\n\tat jetbrains.youtrack.imageTool.tool.AttachFileActionsTemplate.access$000(AttachFileActionsTemplate.java:23)\n\tat jetbrains.youtrack.imageTool.tool.AttachFileActionsTemplate$1.render(AttachFileActionsTemplate.java:67)\n\tat jetbrains.mps.webr.stateless.template.runtime.BaseTemplate.render(BaseTemplate.java:125)\n\tat jetbrains.youtrack.imageTool.tool.AttachFileActionsTemplate.render(AttachFileActionsTemplate.java:65)\n\tat jetbrains.mps.webr.stateless.template.runtime.BaseTemplate.render(BaseTemplate.java:118)\n\tat jetbrains.mps.webr.stateless.template.runtime.BaseTemplate.render(BaseTemplate.java:109)\n\tat jetbrains.mps.webr.stateless.template.runtime.BaseTemplate.renderToString(BaseTemplate.java:97)\n\tat jetbrains.youtrack.imageTool.stateful.AttachActions_HtmlTemplateComponent.renderTemplate(AttachActions_HtmlTemplateComponent.java:80)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.welcomeScreen.Dashboard_RootHtmlTemplateComponent.renderTemplate(Dashboard_RootHtmlTemplateComponent.java:232)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.welcomeScreen.DashboardLayout_LayoutComponent.renderTemplate(DashboardLayout_LayoutComponent.java:383)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.render(TemplateComponent.java:391)\n\tat jetbrains.mps.webr.runtime.requestProcessor.ResponseFactory$2.doAction(ResponseFactory.java:79)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.executeResponseAction(MainServlet.java:198)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:149)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:734)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:847)\n\tat org.eclipse.jetty.servlet.ServletHolder.handle(ServletHolder.java:648)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1336)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1307)\n\tat org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:453)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:137)\n\tat org.eclipse.jetty.security.SecurityHandler.handle(SecurityHandler.java:559)\n\tat org.eclipse.jetty.server.session.SessionHandler.doHandle(SessionHandler.java:231)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1072)\n\tat org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:382)\n\tat org.eclipse.jetty.server.session.SessionHandler.doScope(SessionHandler.java:193)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1006)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:135)\n\tat org.eclipse.jetty.server.handler.ContextHandlerCollection.handle(ContextHandlerCollection.java:224)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:116)\n\tat org.eclipse.jetty.server.Server.handle(Server.java:365)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.handleRequest(AbstractHttpConnection.java:485)\n\tat org.eclipse.jetty.server.AbstractHttpConnection.headerComplete(AbstractHttpConnection.java:926)\n\tat org.eclipse.jetty.server.AbstractHttpConnection$RequestHandler.headerComplete(AbstractHttpConnection.java:988)\n\tat org.eclipse.jetty.http.HttpParser.parseNext(HttpParser.java:635)\n\tat org.eclipse.jetty.http.HttpParser.parseAvailable(HttpParser.java:235)\n\tat org.eclipse.jetty.server.AsyncHttpConnection.handle(AsyncHttpConnection.java:82)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint.handle(SelectChannelEndPoint.java:627)\n\tat org.eclipse.jetty.io.nio.SelectChannelEndPoint$1.run(SelectChannelEndPoint.java:51)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:608)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool$3.run(QueuedThreadPool.java:543)\n\tat java.lang.Thread.run(Thread.java:744)\n\njust tried login in...\n\n===Environment details===\nhost: ip-10-77-157-150.eu-west-1.compute.internal\nbase url: http://harmony-eap-sandbox.myjetbrains.com/youtrack\nversion: 6.0 EAP\nbuild: 11456 [15-Sep-2014 12:04] \njava.version: 1.7.0_51\njava.vendor: Oracle Corporation\njava.vm.specification.version: 1.7\njava.vm.specification.vendor: Oracle Corporation\njava.vm.specification.name: Java Virtual Machine Specification\njava.vm.version: 24.51-b03\njava.vm.vendor: Oracle Corporation\njava.vm.name: Java HotSpot(TM) Server VM\njava.specification.version: 1.7\njava.specification.vendor: Oracle Corporation\njava.specification.name: Java Platform API Specification\njava.class.version: 51.0\nos.name: Linux\nos.arch: i386\nos.version: 2.6.21.7-2.ec2.v1.2.fc8xen\nMax memory: 2 GB (2712928256 bytes)\nFree memory: 852 MB (894254824 bytes)\nTotal memory: 2 GB (2712928256 bytes)\nAvailable processors: 2\nThrown at: Wednesday, September 17, 2014 12:42:25 AM MSK"
    }, {"name": "created", "value": "1410900325598"}, {
        "name": "updated",
        "value": "1410940804860"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "resolved", "value": "1410940804877"}, {
        "name": "reporterName",
        "value": "app_exception"
    }, {"name": "reporterFullName", "value": "Exception Robot"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "duplicates", "value": "JT-26392"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Duplicate"],
        "valueId": ["Duplicate"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-23756",
    "entityId": "25-667567",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "23756"
    }, {
        "name": "summary",
        "value": "Could not initialize class jetbrains.charisma.wiki.CharismaWikiProcessorMarkup"
    }, {
        "name": "description",
        "value": "java.lang.NoClassDefFoundError: Could not initialize class jetbrains.charisma.wiki.CharismaWikiProcessorMarkup\n\tat jetbrains.charisma.wiki.CharismaWikiProcessor.createProcessor(CharismaWikiProcessor.java:53)\n\tat jetbrains.charisma.smartui.commands.CommandCommentPreview_HtmlTemplateComponent.renderTemplate(CommandCommentPreview_HtmlTemplateComponent.java:85)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.commands.CommandDialog_HtmlTemplateComponent.renderTemplate(CommandDialog_HtmlTemplateComponent.java:440)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.workspace.Issues_RootHtmlTemplateComponent.renderTemplate(Issues_RootHtmlTemplateComponent.java:748)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:797)\n\tat jetbrains.charisma.smartui.layout.SmartUI_LayoutComponent.renderTemplate(SmartUI_LayoutComponent.java:385)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:472)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.render(TemplateComponent.java:389)\n\tat jetbrains.mps.webr.runtime.requestProcessor.ResponseFactory$2.doAction(ResponseFactory.java:79)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.executeResponseAction(MainServlet.java:174)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:125)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:621)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:722)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:305)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:210)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:243)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:210)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:243)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:210)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:243)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:210)\n\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:224)\n\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:169)\n\tat org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:472)\n\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:168)\n\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:98)\n\tat org.apache.catalina.valves.AccessLogValve.invoke(AccessLogValve.java:927)\n\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:118)\n\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:407)\n\tat org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:987)\n\tat org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:579)\n\tat org.apache.tomcat.util.net.JIoEndpoint$SocketProcessor.run(JIoEndpoint.java:307)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1145)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:615)\n\tat java.lang.Thread.run(Thread.java:744)\n\n\n===Environment details===\nhost: unit-441\nbase url: http://buturlinov-pc-test.intellij.net/youtrack\nversion: 5.1\nbuild: 8447 [13-Feb-2014 14:10] \njava.version: 1.7.0_51\njava.vendor: Oracle Corporation\njava.vm.specification.version: 1.7\njava.vm.specification.vendor: Oracle Corporation\njava.vm.specification.name: Java Virtual Machine Specification\njava.vm.version: 24.51-b03\njava.vm.vendor: Oracle Corporation\njava.vm.name: Java HotSpot(TM) 64-Bit Server VM\njava.specification.version: 1.7\njava.specification.vendor: Oracle Corporation\njava.specification.name: Java Platform API Specification\njava.class.version: 51.0\nos.name: Linux\nos.arch: amd64\nos.version: 3.2.0-58-generic\nMax memory: 123 MB (129761280 bytes)\nFree memory: 2 MB (2902968 bytes)\nTotal memory: 123 MB (129761280 bytes)\nAvailable processors: 8\nThrown at: Friday, February 21, 2014 12:13:56 PM MSK"
    }, {"name": "created", "value": "1392970460904"}, {
        "name": "updated",
        "value": "1410940748269"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "resolved", "value": "1393845989115"}, {
        "name": "reporterName",
        "value": "app_exception"
    }, {"name": "reporterFullName", "value": "Exception Robot"}, {
        "name": "commentsCount",
        "value": "10"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "is duplicated by", "value": "JT-21216"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-22463"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-22846"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-22895"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-23084"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-23627"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-23917"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-24033"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-24400"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-24517"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-24638"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-24779"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-25280"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-25325"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-25500"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-25501"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-25589"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-25797"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-25886"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-25887"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-26146"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-26338"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-26471"}]
    }, {
        "name": "Priority",
        "value": ["Show-stopper"],
        "valueId": ["Show-stopper"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["As designed"],
        "valueId": ["As designed"]
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Evgeny Naumenko", "value": "Evgeny_Naumenko"}]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["5.1.1"],
        "valueId": []
    }, {"name": "Affected versions", "value": ["5.1"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [{
        "id": "27-681126",
        "author": "alexander.buturlinov",
        "authorFullName": "Alexander Buturlinov",
        "issueId": "JT-23756",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "This is valid only for war package",
        "shownForIssueAuthor": false,
        "created": 1392972362530,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-681904",
        "author": "smandreev",
        "authorFullName": "Sergei Andreev",
        "issueId": "JT-23756",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "What is the servlet container?",
        "shownForIssueAuthor": false,
        "created": 1393225379829,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-686554",
        "author": "vgurov",
        "authorFullName": "Vadim Gurov",
        "issueId": "JT-23756",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "still the case?",
        "shownForIssueAuthor": false,
        "created": 1393832793413,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-686556",
        "author": "alexander.buturlinov",
        "authorFullName": "Alexander Buturlinov",
        "issueId": "JT-23756",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "I'll check it today",
        "shownForIssueAuthor": false,
        "created": 1393832968592,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-686569",
        "author": "alexander.buturlinov",
        "authorFullName": "Alexander Buturlinov",
        "issueId": "JT-23756",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Yes, it's still valid. Tomcat7",
        "shownForIssueAuthor": false,
        "created": 1393834384845,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-686604",
        "author": "Evgeny_Naumenko",
        "authorFullName": "Evgeny Naumenko",
        "issueId": "JT-23756",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "I've checked the latest build (8538) on the same configuration (Ubuntu Linux, oracle java 1.7.0_51, tomcat 7.0.52), it looks OK. \n\n@alexander.buturlinov, could you please point out the exact build you're trying to deploy and provide me with steps to reproduce the issue? ",
        "shownForIssueAuthor": false,
        "created": 1393836879108,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-686618",
        "author": "alexander.buturlinov",
        "authorFullName": "Alexander Buturlinov",
        "issueId": "JT-23756",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "STR:\n1. Start YT with empty database.\n2. Create a project.\n3. Create an issue with long description.\n4. Go to issues list and change view mode to 'Detailed view'.",
        "shownForIssueAuthor": false,
        "created": 1393837837416,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-686795",
        "author": "Evgeny_Naumenko",
        "authorFullName": "Evgeny Naumenko",
        "issueId": "JT-23756",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Issue is caused by OutOfMemoryError, increasing Xmx value solves the problem.",
        "shownForIssueAuthor": false,
        "created": 1393845979447,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-690506",
        "author": "Jakub__Martyčák",
        "authorFullName": "Jakub  Martyčák",
        "issueId": "JT-23756",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "I get the exact same error on tomcat6 with java version 1.6.0_30 . I installed youtrack version 5.1-8447 from .WAR package. First i recieved the error when i tried to go to issues overview, then i increased heap size to 1024m it solved the issues overview, but now i am getting the same, when i wanna go to similar issues on issue detail page.. just sayin... youtrack is cool tho:-))",
        "shownForIssueAuthor": false,
        "created": 1394141770450,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-690552",
        "author": "Evgeny_Naumenko",
        "authorFullName": "Evgeny Naumenko",
        "issueId": "JT-23756",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "@Jacub, thanks for the feedback. Could you please provide us with log files?",
        "shownForIssueAuthor": false,
        "created": 1394170279087,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26471",
    "entityId": "25-747244",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26471"
    }, {
        "name": "summary",
        "value": "Could not initialize class jetbrains.charisma.wiki.CharismaWikiProcessorMarkup"
    }, {
        "name": "description",
        "value": "java.lang.NoClassDefFoundError: Could not initialize class jetbrains.charisma.wiki.CharismaWikiProcessorMarkup\n\tat jetbrains.charisma.wiki.CharismaWikiProcessor.createProcessor(CharismaWikiProcessor.java:53)\n\tat jetbrains.charisma.smartui.commands.CommandCommentPreview_HtmlTemplateComponent.renderTemplate(CommandCommentPreview_HtmlTemplateComponent.java:85)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.commands.CommandDialog_HtmlTemplateComponent.renderTemplate(CommandDialog_HtmlTemplateComponent.java:440)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.welcomeScreen.Dashboard_RootHtmlTemplateComponent.renderTemplate(Dashboard_RootHtmlTemplateComponent.java:372)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.buildTemplateComponent(TemplateComponent.java:804)\n\tat jetbrains.charisma.smartui.welcomeScreen.DashboardLayout_LayoutComponent.renderTemplate(DashboardLayout_LayoutComponent.java:354)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.renderTemplate(TemplateComponent.java:474)\n\tat jetbrains.mps.webr.runtime.templateComponent.TemplateComponent.render(TemplateComponent.java:391)\n\tat jetbrains.mps.webr.runtime.requestProcessor.ResponseFactory$2.doAction(ResponseFactory.java:79)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.executeResponseAction(MainServlet.java:198)\n\tat jetbrains.mps.webr.runtime.servlet.MainServlet.doGet(MainServlet.java:149)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:621)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:722)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:305)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:210)\n\tat jetbrains.mps.webr.runtime.filter.QueryParameterFilter.doFilter(QueryParameterFilter.java:25)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:243)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:210)\n\tat org.eclipse.jetty.continuation.ContinuationFilter.doFilter(ContinuationFilter.java:137)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:243)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:210)\n\tat org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:82)\n\tat org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:242)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:243)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:210)\n\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:224)\n\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:169)\n\tat org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:472)\n\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:168)\n\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:98)\n\tat org.apache.catalina.valves.AccessLogValve.invoke(AccessLogValve.java:927)\n\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:118)\n\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:407)\n\tat org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:987)\n\tat org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:579)\n\tat org.apache.tomcat.util.net.JIoEndpoint$SocketProcessor.run(JIoEndpoint.java:309)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1146)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:615)\n\tat java.lang.Thread.run(Thread.java:701)\n\n\n===Environment details===\nhost: osTticket\nbase url: http://192.168.193.120:8080/youtrack\nversion: 5.2.4\nbuild: 8815 [13-Aug-2014 15:13] \njava.version: 1.6.0_32\njava.vendor: Sun Microsystems Inc.\njava.vm.specification.version: 1.0\njava.vm.specification.vendor: Sun Microsystems Inc.\njava.vm.specification.name: Java Virtual Machine Specification\njava.vm.version: 23.25-b01\njava.vm.vendor: Sun Microsystems Inc.\njava.vm.name: OpenJDK 64-Bit Server VM\njava.specification.version: 1.6\njava.specification.vendor: Sun Microsystems Inc.\njava.specification.name: Java Platform API Specification\njava.class.version: 50.0\nos.name: Linux\nos.arch: amd64\nos.version: 3.2.0-23-generic\nMax memory: 123 MB (129761280 bytes)\nFree memory: 4 MB (4729208 bytes)\nTotal memory: 123 MB (129761280 bytes)\nAvailable processors: 1\nThrown at: Wednesday, September 17, 2014 6:49:33 AM UTC"
    }, {"name": "created", "value": "1410936574604"}, {
        "name": "updated",
        "value": "1410940748219"
    }, {"name": "updaterName", "value": "Ekaterina.Zaikina"}, {
        "name": "updaterFullName",
        "value": "Ekaterina Zaikina"
    }, {"name": "resolved", "value": "1410940748242"}, {
        "name": "reporterName",
        "value": "app_exception"
    }, {"name": "reporterFullName", "value": "Exception Robot"}, {
        "name": "commentsCount",
        "value": "0"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "duplicates", "value": "JT-23756"}]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Exception"], "valueId": ["Exception"]}, {
        "name": "State",
        "value": ["Duplicate"],
        "valueId": ["Duplicate"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Affected versions",
        "value": ["5.2.4"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-7642",
    "entityId": "25-225507",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "7642"
    }, {"name": "summary", "value": "Multiple Draft Issues"}, {
        "name": "description",
        "value": "YouTrack is an amazing under-rated application. It does not behave like an ordinary web app. For it to auto-retain partially drafted issues is unexpected but very much welcomed. I miss one feature regarding creating new issues... several times I wanted to submit a new issue but was not yet ready to submit an existing draft issue requiring more research. It would be helpful to be able to create as many drafts as needed."
    }, {"name": "created", "value": "1291226789694"}, {
        "name": "updated",
        "value": "1410930507213"
    }, {"name": "updaterName", "value": "xi-eye"}, {
        "name": "updaterFullName",
        "value": "Alexander Anisimov"
    }, {"name": "resolved", "value": "1406623418248"}, {
        "name": "reporterName",
        "value": "sswing"
    }, {"name": "reporterFullName", "value": "Steve Swing"}, {"name": "commentsCount", "value": "3"}, {
        "name": "votes",
        "value": "34"
    }, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "is duplicated by", "value": "JT-356"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-2851"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-3435"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-4975"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-7341"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-9334"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-11579"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-12107"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-13173"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-16056"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-16102"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-16194"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-19373"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-21051"
        }, {"type": "Duplicate", "role": "is duplicated by", "value": "JT-21242"}, {
            "type": "Duplicate",
            "role": "is duplicated by",
            "value": "JT-24356"
        }, {"type": "Relates", "role": "relates to", "value": "JT-11619"}, {
            "type": "Relates",
            "role": "relates to",
            "value": "JT-15719"
        }, {"type": "Relates", "role": "relates to", "value": "JT-18311"}, {
            "type": "Relates",
            "role": "relates to",
            "value": "JT-15248"
        }, {"type": "Relates", "role": "relates to", "value": "JT-15647"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-9400"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24568"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24696"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24697"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-24698"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-24699"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25116"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25878"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-25881"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-25884"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26045"
        }, {"type": "Subtask", "role": "parent for", "value": "JT-26044"}, {
            "type": "Subtask",
            "role": "parent for",
            "value": "JT-26063"
        }]
    }, {
        "name": "Priority",
        "value": ["Critical"],
        "valueId": ["Critical"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Feature"], "valueId": ["Feature"]}, {
        "name": "State",
        "value": ["Fixed"],
        "valueId": ["Fixed"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Anna Zhdan", "value": "Anna.Zhdan"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Fix versions", "value": ["6.0"], "valueId": []}, {
        "name": "Fixed in builds",
        "value": ["10768"],
        "valueId": []
    }, {"name": "Affected versions", "value": ["2.1.3"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-162257",
            "url": "https://youtrack.jetbrains.com/_persistent/image1.png?file=74-162257&v=0&c=true",
            "value": "image1.png"
        }]
    }],
    "comment": [{
        "id": "27-712696",
        "author": "Rajeev_Sebastian_MisX",
        "authorFullName": "Rajeev Sebastian",
        "issueId": "JT-7642",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "It would be cool to have something like adding new drafts like the docked composers in GMail: docked at the bottom.\n\nJust a suggestion!\n",
        "shownForIssueAuthor": false,
        "created": 1396588981590,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-770424",
        "author": "shvedov",
        "authorFullName": "Alexander Shvedov",
        "issueId": "JT-7642",
        "parentId": null,
        "deleted": true,
        "jiraId": null,
        "text": "ARGHHHHHHHHHH",
        "shownForIssueAuthor": false,
        "created": 1405877802120,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-770442",
        "author": "sswing",
        "authorFullName": "Steve Swing",
        "issueId": "JT-7642",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "I feel a little guilty for opening this issue 3 years ago but it's tempered by the number of duplicate and related issues opened since then. I guess technically JT-7642 duplicates the issues that have smaller numbers in the sequence. Thank you for your hard work @shvedov, @Anna.Zhdan and I'm sure many others. Jetbrain's customers really appreciate the amazing software you create. I know I do. I might have to change careers to another field if I couldn't use IntelliJ IDEA, AppCode and YouTrack. JT-24698 is a particularly daunting challenge @Anna.Zhdan; I wish you success! ",
        "shownForIssueAuthor": false,
        "created": 1405901047528,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-777041",
        "author": "geevee",
        "authorFullName": "Evgeny Gerashchenko",
        "issueId": "JT-7642",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Thank you!",
        "shownForIssueAuthor": false,
        "created": 1406898051000,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26469",
    "entityId": "25-747173",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26469"
    }, {
        "name": "summary",
        "value": "Agile Board Column identification to support 'functional areas'"
    }, {
        "name": "description",
        "value": "This is feature request in Agile Board view.\nCurrently the columns are identified either by 'type' or 'state' or 'priority'.\nI'd like to request another type of view by 'functional areas'.\n\nCurrently, the only hackish way to achieve this would be to define custom types such as 'task_cloud', 'task_webui' etc.\n\nThis could be supported by having columns identified by either 'tags' or 'subsystem'.\nIn my opinion subsystem may be too granular and sometimes may not map to functional areas directly if it is a common module. So my vote would be to support column by 'tags'.\n\nNot all tags would be applicable, so an interface should let me choose set of tags for identification.\n\nThis view will let easier resource allocation and transfers if needed based on queue length for each tag as the project progresses.\n\nThanks for the consideration.\nAnd kudos for an intuitive tool.\n"
    }, {"name": "created", "value": "1410925910512"}, {
        "name": "updated",
        "value": "1410925910512"
    }, {"name": "updaterName", "value": "shaileshkm"}, {
        "name": "updaterFullName",
        "value": "Shailesh Mungikar"
    }, {"name": "reporterName", "value": "shaileshkm"}, {
        "name": "reporterFullName",
        "value": "Shailesh Mungikar"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Feature"], "valueId": ["Feature"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Leonid Stryuk", "value": "Leonid.Stryuk"}]}, {
        "name": "Subsystem",
        "value": ["Agile Board"],
        "valueId": [],
        "color": {"bg": "#d9ffc8", "fg": "#000"}
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26468",
    "entityId": "25-747155",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26468"
    }, {"name": "summary", "value": "Ability to make fields read-only"}, {
        "name": "description",
        "value": "I would like to be able to make a field effectively readonly to users. I want to have queryable, calculated fields that are visible to the user but can't be changed except by way of a workflow.\n\nE.g. I want a field \"Resolver\" that records the user who switched the state to be resolved, or \"Duplicate count\" that just keeps track of an integer number of linked duplicates so it can be sorted in a query.\n\nIf there's a way to do this now I'm happy with a workaround.\n\nThanks,"
    }, {"name": "created", "value": "1410905274714"}, {
        "name": "updated",
        "value": "1410905296450"
    }, {"name": "updaterName", "value": "joecastro"}, {
        "name": "updaterFullName",
        "value": "Joe Castro"
    }, {"name": "reporterName", "value": "joecastro"}, {
        "name": "reporterFullName",
        "value": "Joe Castro"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Relates", "role": "relates to", "value": "JT-17742"}]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Feature"], "valueId": ["Feature"]}, {
        "name": "State",
        "value": ["Submitted"],
        "valueId": ["Submitted"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-17742",
    "entityId": "25-492149",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "17742"
    }, {"name": "summary", "value": "Levels of Field Privacy/Editability"}, {
        "name": "description",
        "value": "=Problem=\n\n*\"Read Issue\" View issues (public fields only)* permission allows an issue reporter to change all fields, including \"Assignee\", \"Fix in Version\". \n\nOne solution (JT-11480) to this was to make the fields \"private\" and allow issue reporters view private fields, but not update them. \n# +This covers described above use case. \n# - But looses real private data use case. Which is pretty important.\n\nAnother solution (http://forum.jetbrains.com/thread/YouTrack-660) is to create a project for reporting issues and then re-assign issue to the real project. \nThis seems to be slightly better way to address it:\n# + We can keep private fields\n# - But it adds a level of complexity in security setup\n# - Users report to one project and then see a different one\n# - And of course users loose ability to change some issue fields like: issue type, priority, affected versions, etc\n\n\n=How you can solve this=\n\nBoth solutions mentioned above are ''work-arounds''. It will be nice to have a ''real solution'' to this problem. Something like:\n#'''Custom field visibility based on user groups''' and not private flag. \n##This gives ultimate flexibility but site performance could suffer.\n#'''Add another flag like \"Private2\"''' and respective permissions \"Read Issue Private2 Fields\" and \"Update Issue Private2 Fields\". \n##This might be easier on the server and solve both problems\n##Might as well add more than one: \"Private3\", \"Private4\""
    }, {"name": "created", "value": "1354454188984"}, {
        "name": "updated",
        "value": "1410905296411"
    }, {"name": "updaterName", "value": "joecastro"}, {
        "name": "updaterFullName",
        "value": "Joe Castro"
    }, {"name": "reporterName", "value": "mz"}, {
        "name": "reporterFullName",
        "value": "Michael Zarnitsa"
    }, {"name": "commentsCount", "value": "1"}, {"name": "votes", "value": "6"}, {
        "name": "links",
        "value": [{"type": "Relates", "role": "relates to", "value": "JT-26468"}, {
            "type": "Relates",
            "role": "relates to",
            "value": "JT-12597"
        }]
    }, {
        "name": "Priority",
        "value": ["Major"],
        "valueId": ["Major"],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {
        "name": "Type",
        "value": ["Security Problem"],
        "valueId": ["Security Problem"],
        "color": {"bg": "#f294ff", "fg": "#000"}
    }, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Anna Zhdan", "value": "Anna.Zhdan"}]}, {
        "name": "Subsystem",
        "value": ["Custom Fields"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [{
        "id": "27-451638",
        "author": "tjarko",
        "authorFullName": "Tjarko Rikkerink",
        "issueId": "JT-17742",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "This would be a great addition because we now have to give access to ALL fields to be updated, otherwise they will see our internally used fields for deadlines, spenttime en estimation.. I do not want my clients to see this field but I also do not want them changing assignees, priority, fixed versions etc... \n\nThere should in my opinion be at least a checkbox called \"Public read\" but the above mentioned solution is way.. WAY better",
        "shownForIssueAuthor": false,
        "created": 1362044772279,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26465",
    "entityId": "25-747132",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26465"
    }, {"name": "summary", "value": "Allow to host attachments somewhere else"}, {
        "name": "description",
        "value": "Our development workflow often requires to attach big files and the available space in YouTrack is quite limited.\n\nRight now we have solved this by using systems such as Google Drive, but we would really appreciate to have the ability to host these files in a custom place (sFTP, CDN, or other places where we have full control of the available space)."
    }, {"name": "created", "value": "1410897265900"}, {
        "name": "updated",
        "value": "1410897265900"
    }, {"name": "updaterName", "value": "sciamannikoo"}, {
        "name": "updaterFullName",
        "value": "Andrea Sciamanna"
    }, {"name": "reporterName", "value": "sciamannikoo"}, {
        "name": "reporterFullName",
        "value": "Andrea Sciamanna"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "0"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Feature"], "valueId": ["Feature"]}, {
        "name": "State",
        "value": ["Submitted"],
        "valueId": ["Submitted"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26461",
    "entityId": "25-746947",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26461"
    }, {"name": "summary", "value": "Strange behaviours in the UI"}, {
        "name": "description",
        "value": "Please check this [screencast|https://drive.google.com/file/d/0Bwyikk66Ki5LSzd2MVlQWWpOSDQ/edit?usp=sharing].\n\nNot sure what could cause this, as it seems to happen only on specific projects.\nMaybe it's caused by some rule, but even in this case, I don't understand what rule could cause this sort of problems in the user interface behaviour.\n\nIn short, the keyboard cursor moves around, or content gets deleted."
    }, {"name": "created", "value": "1410875074097"}, {
        "name": "updated",
        "value": "1410893977983"
    }, {"name": "updaterName", "value": "xi-eye"}, {
        "name": "updaterFullName",
        "value": "Alexander Anisimov"
    }, {"name": "resolved", "value": "1410893616836"}, {
        "name": "reporterName",
        "value": "sciamannikoo"
    }, {"name": "reporterFullName", "value": "Andrea Sciamanna"}, {
        "name": "commentsCount",
        "value": "5"
    }, {"name": "votes", "value": "0"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "duplicates", "value": "JT-19359"}]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Usability Problem"], "valueId": ["Usability Problem"]}, {
        "name": "State",
        "value": ["Duplicate"],
        "valueId": ["Duplicate"]
    }, {"name": "Assignee", "value": [{"fullName": "Alexander Anisimov", "value": "xi-eye"}]}, {
        "name": "Subsystem",
        "value": ["UI"],
        "valueId": []
    }, {"name": "Severity", "value": ["Routine"], "valueId": ["Routine"], "color": {"bg": "#bef624", "fg": "#000"}}],
    "comment": [{
        "id": "27-801273",
        "author": "xi-eye",
        "authorFullName": "Alexander Anisimov",
        "issueId": "JT-26461",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Andrea, i'm sure that the problem of this behavior is a refresh that caused by a workflow (see the message at the top 'Type is required'). Is it your custom workflow?",
        "shownForIssueAuthor": false,
        "created": 1410889488691,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-801317",
        "author": "sciamannikoo",
        "authorFullName": "Andrea Sciamanna",
        "issueId": "JT-26461",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Yes, it is, but why a required field is causing a refresh. Or better, why the refresh clears causes this strange behaviour?\n\nThis is the workflow rule and it looks quite trivial to me (taken and slightly modified from other \"core\" workflow rule):\n{code}\nrule Require a type for new issues \n \nwhen Type == null && !isReported() { \n  Type.required(\"Please enter a type for this issue.\"); \n}\n{code}\n\nThe whole workflow is more complex: maybe is a combination of all rules and other workflows causing this?\nThe main problem with workflows is that there is no (or I don't see) any way to debug them, so it's really hard to find out which rule causes the issues, or if the issue is caused by the rules, as a matter of fact.",
        "shownForIssueAuthor": false,
        "created": 1410892733970,
        "updated": 1410892850325,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-801319",
        "author": "xi-eye",
        "authorFullName": "Alexander Anisimov",
        "issueId": "JT-26461",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "In fact any rule can cause a refresh because the state of the issue can completely been changed. As a workaround to fix this problem quick i can recommend you to check the value of the type on submit action. ",
        "shownForIssueAuthor": false,
        "created": 1410893051167,
        "updated": 1410893284957,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-801322",
        "author": "sciamannikoo",
        "authorFullName": "Andrea Sciamanna",
        "issueId": "JT-26461",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Ok, it makes sense, but still, I don't get why the UI behaves like that.\n\nAs for the workaround, I think I can do that, but how I'm supposed to check \"on submit action\"?\nI can't find a \"isSubmitted()\" function.",
        "shownForIssueAuthor": false,
        "created": 1410893372162,
        "updated": 1410892733918,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-801324",
        "author": "xi-eye",
        "authorFullName": "Alexander Anisimov",
        "issueId": "JT-26461",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "@andrey.tigay, please advise.",
        "shownForIssueAuthor": false,
        "created": 1410893977996,
        "updated": 1410893051124,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-19359",
    "entityId": "25-540663",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "19359"
    }, {
        "name": "summary",
        "value": "Focus constantly jumps into and selects the draft summary if there is an unsatisfied required by workflow field"
    }, {
        "name": "description",
        "value": "Add the simple workflow:\n{code}\nrule required\n \nwhen !isReported() { \n  Fix versions.required(\"set fix version!\"); \n}\n{code}\n\nTry to input summary in draft - the 'required' field is highlighted and message appears as expected, but the cursor constantly ''jumps'' to the summary start and selects ''the entire summary'', it's very incontinent."
    }, {"name": "created", "value": "1365686292625"}, {
        "name": "updated",
        "value": "1410893616867"
    }, {"name": "updaterName", "value": "xi-eye"}, {
        "name": "updaterFullName",
        "value": "Alexander Anisimov"
    }, {"name": "reporterName", "value": "dima"}, {
        "name": "reporterFullName",
        "value": "Dmitry Krasilschikov"
    }, {"name": "commentsCount", "value": "0"}, {"name": "votes", "value": "2"}, {
        "name": "links",
        "value": [{"type": "Duplicate", "role": "is duplicated by", "value": "JT-26461"}]
    }, {
        "name": "Priority",
        "value": ["Major"],
        "valueId": ["Major"],
        "color": {"bg": "#f0f2f3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Usability Problem"], "valueId": ["Usability Problem"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Vadim Gurov", "value": "vgurov"}]}, {
        "name": "Subsystem",
        "value": ["Workflow"],
        "valueId": [],
        "color": {"bg": "#ccffff", "fg": "#000"}
    }, {"name": "Fix versions", "value": ["6.1"], "valueId": []}, {
        "name": "Affected versions",
        "value": ["5.0"],
        "valueId": []
    }, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "attachments",
        "value": [{
            "id": "74-115546",
            "url": "https://youtrack.jetbrains.com/_persistent/screenshot1.png?file=74-115546&v=2&c=true",
            "value": "screenshot1.png"
        }]
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26445",
    "entityId": "25-746405",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26445"
    }, {"name": "summary", "value": "Copy issue number & description w/o Flash"}, {
        "name": "description",
        "value": "Please consider removing Adobe Flash dependency for this action.\n\nLots of people nowadays me including try to keep Flash-free setups.\nFlash is very annoying piece of Software. Its update frequency is overwhelming.\n\nUnfortunately, issue page HTML layout does not allow one to simply select and copy the issue number together with its description.\n"
    }, {"name": "created", "value": "1410826215021"}, {
        "name": "updated",
        "value": "1410889039660"
    }, {"name": "updaterName", "value": "xi-eye"}, {
        "name": "updaterFullName",
        "value": "Alexander Anisimov"
    }, {"name": "reporterName", "value": "gregsh"}, {
        "name": "reporterFullName",
        "value": "Gregory Shrago"
    }, {"name": "commentsCount", "value": "4"}, {"name": "votes", "value": "1"}, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Usability Problem"], "valueId": ["Usability Problem"]}, {
        "name": "State",
        "value": ["Open"],
        "valueId": ["Open"],
        "color": {"bg": "#ffea73", "fg": "#000"}
    }, {"name": "Assignee", "value": [{"fullName": "Alexander Anisimov", "value": "xi-eye"}]}, {
        "name": "Subsystem",
        "value": ["No subsystem"],
        "valueId": []
    }, {"name": "Affected versions", "value": ["5.0"], "valueId": []}, {
        "name": "Browser",
        "value": ["Safari"],
        "valueId": ["Safari"]
    }, {"name": "OS", "value": ["Mac OS X"], "valueId": ["Mac OS X"]}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [{
        "id": "27-800569",
        "author": "axel.costas.pena",
        "authorFullName": "Áxel Costas Pena",
        "issueId": "JT-26445",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Agree, trying to manually copying just issue ID or both issueID and description is very hard",
        "shownForIssueAuthor": false,
        "created": 1410851067218,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-800798",
        "author": "xi-eye",
        "authorFullName": "Alexander Anisimov",
        "issueId": "JT-26445",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "For security reasons it's impossible update system clipboard via browser. The only variant is a Flash.",
        "shownForIssueAuthor": false,
        "created": 1410862718878,
        "updated": 1410862814790,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-801028",
        "author": "gregsh",
        "authorFullName": "Gregory Shrago",
        "issueId": "JT-26445",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "No problem. We all can manually apply Ctrl-C if selection is right.",
        "shownForIssueAuthor": false,
        "created": 1410875926976,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }, {
        "id": "27-801047",
        "author": "axel.costas.pena",
        "authorFullName": "Áxel Costas Pena",
        "issueId": "JT-26445",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Yeah, when I started reading the issue descrition I thought the same as Alexander, but then I realized that Greg was talking about the difficulty of manually selecting the text, and I share his feeling",
        "shownForIssueAuthor": false,
        "created": 1410876278211,
        "updated": 1410851067184,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}, {
    "id": "JT-26446",
    "entityId": "25-746489",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26446"
    }, {"name": "summary", "value": "Burndown doesn't work in FF 32 Ubuntu 14"}, {
        "name": "description",
        "value": "I see no lines on it. Chrome is ok."
    }, {"name": "created", "value": "1410850832114"}, {
        "name": "updated",
        "value": "1410887147453"
    }, {"name": "updaterName", "value": "jetbrains.teamcity"}, {
        "name": "updaterFullName",
        "value": "JetBrains TeamCity"
    }, {"name": "resolved", "value": "1410883870737"}, {
        "name": "reporterName",
        "value": "vgurov"
    }, {"name": "reporterFullName", "value": "Vadim Gurov"}, {"name": "commentsCount", "value": "0"}, {
        "name": "votes",
        "value": "0"
    }, {
        "name": "links",
        "value": [{"type": "Subtask", "role": "subtask of", "value": "JT-22667"}]
    }, {
        "name": "Priority",
        "value": ["Show-stopper"],
        "valueId": ["Show-stopper"],
        "color": {"bg": "#ffe3e3", "fg": "#cc0000"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Fixed"],
        "valueId": ["Fixed"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Harmonicity IX"],
        "valueId": []
    }, {"name": "Fixed in builds", "value": ["11480"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26458",
    "entityId": "25-746816",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26458"
    }, {"name": "summary", "value": "The name has two arrows"}, {
        "name": "description",
        "value": "!Снимок экрана 2014-09-16 в 15.51.09.png!"
    }, {"name": "created", "value": "1410868414972"}, {
        "name": "updated",
        "value": "1410884994649"
    }, {"name": "updaterName", "value": "xi-eye"}, {
        "name": "updaterFullName",
        "value": "Alexander Anisimov"
    }, {"name": "resolved", "value": "1410871591940"}, {
        "name": "reporterName",
        "value": "artemtiunov"
    }, {"name": "reporterFullName", "value": "Artem Tiunov"}, {"name": "commentsCount", "value": "0"}, {
        "name": "votes",
        "value": "0"
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Bug"], "valueId": ["Bug"]}, {
        "name": "State",
        "value": ["Invalid"],
        "valueId": ["Invalid"]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "attachments",
        "value": [{
            "id": "74-186054",
            "url": "https://youtrack.jetbrains.com/_persistent/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202014-09-16%20%D0%B2%2015.51.09.png?file=74-186054&v=0&c=true",
            "value": "Снимок экрана 2014-09-16 в 15.51.09.png"
        }]
    }],
    "comment": [],
    "tag": []
}, {
    "id": "JT-26294",
    "entityId": "25-739915",
    "jiraId": null,
    "field": [{"name": "projectShortName", "value": "JT"}, {
        "name": "numberInProject",
        "value": "26294"
    }, {
        "name": "summary",
        "value": "Menu on reports screen redirect to \"baseurl + menu item url\", ignoring user's current protocol"
    }, {"name": "created", "value": "1409743997563"}, {
        "name": "updated",
        "value": "1410880005522"
    }, {"name": "updaterName", "value": "jetbrains.teamcity"}, {
        "name": "updaterFullName",
        "value": "JetBrains TeamCity"
    }, {"name": "resolved", "value": "1410874962044"}, {
        "name": "reporterName",
        "value": "vgurov"
    }, {"name": "reporterFullName", "value": "Vadim Gurov"}, {"name": "commentsCount", "value": "1"}, {
        "name": "votes",
        "value": "0"
    }, {
        "name": "links",
        "value": [{"type": "Relates", "role": "relates to", "value": "JT-26374"}, {
            "type": "Subtask",
            "role": "subtask of",
            "value": "JT-22667"
        }]
    }, {
        "name": "Priority",
        "value": ["Normal"],
        "valueId": ["Normal"],
        "color": {"bg": "#64992C", "fg": "#ebf4dd"}
    }, {"name": "Type", "value": ["Task"], "valueId": ["Task"]}, {
        "name": "State",
        "value": ["Fixed"],
        "valueId": ["Fixed"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }, {
        "name": "Assignee",
        "value": [{"fullName": "Alexander Volfman", "value": "Alexander.Volfman"}]
    }, {"name": "Subsystem", "value": ["No subsystem"], "valueId": []}, {
        "name": "Fix versions",
        "value": ["Harmonicity IX"],
        "valueId": []
    }, {"name": "Fixed in builds", "value": ["11476"], "valueId": []}, {
        "name": "Severity",
        "value": ["Routine"],
        "valueId": ["Routine"],
        "color": {"bg": "#bef624", "fg": "#000"}
    }],
    "comment": [{
        "id": "27-799900",
        "author": "Alexander.Volfman",
        "authorFullName": "Alexander Volfman",
        "issueId": "JT-26294",
        "parentId": null,
        "deleted": false,
        "jiraId": null,
        "text": "Reports part is corrected in the scope of JT-26404. However, other parts of the application requires some changes as well.",
        "shownForIssueAuthor": false,
        "created": 1410771184227,
        "updated": null,
        "permittedGroup": null,
        "comment": []
    }],
    "tag": []
}];