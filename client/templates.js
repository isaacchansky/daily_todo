(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof root === 'undefined' || root !== Object(root)) {
        throw new Error('templatizer: window does not exist or is not an object');
    } else {
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function r(r){return null!=r&&""!==r}function n(e){return Array.isArray(e)?e.map(n).filter(r).join(" "):e}var e={};return e.merge=function t(n,e){if(1===arguments.length){for(var a=n[0],s=1;s<n.length;s++)a=t(a,n[s]);return a}var i=n["class"],l=e["class"];(i||l)&&(i=i||[],l=l||[],Array.isArray(i)||(i=[i]),Array.isArray(l)||(l=[l]),n["class"]=i.concat(l).filter(r));for(var o in e)"class"!=o&&(n[o]=e[o]);return n},e.joinClasses=n,e.cls=function(r,t){for(var a=[],s=0;s<r.length;s++)a.push(t&&t[s]?e.escape(n([r[s]])):n(r[s]));var i=n(a);return i.length?' class="'+i+'"':""},e.attr=function(r,n,t,a){return"boolean"==typeof n||null==n?n?" "+(a?r:r+'="'+r+'"'):"":0==r.indexOf("data")&&"string"!=typeof n?" "+r+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'":t?" "+r+'="'+e.escape(n)+'"':" "+r+'="'+n+'"'},e.attrs=function(r,t){var a=[],s=Object.keys(r);if(s.length)for(var i=0;i<s.length;++i){var l=s[i],o=r[l];"class"==l?(o=n(o))&&a.push(" "+l+'="'+o+'"'):a.push(e.attr(l,o,!1,t))}return a.join("")},e.escape=function(r){var n=String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+r?r:n},e.rethrow=function a(r,n,e,t){if(!(r instanceof Error))throw r;if(!("undefined"==typeof window&&n||t))throw r.message+=" on line "+e,r;try{t=t||require("fs").readFileSync(n,"utf8")}catch(s){a(r,null,e)}var i=3,l=t.split("\n"),o=Math.max(e-i,0),c=Math.min(l.length,e+i),i=l.slice(o,c).map(function(r,n){var t=n+o+1;return(t==e?"  > ":"    ")+t+"| "+r}).join("\n");throw r.path=n,r.message=(n||"Jade")+":"+e+"\n"+i+"\n\n"+r.message,r},e}();

    var templatizer = {};
    templatizer["includes"] = {};
    templatizer["pages"] = {};

    // body.jade compiled template
    templatizer["body"] = function tmpl_body() {
        return '<body><div class="container"><main data-hook="page-container"></main></div></body>';
    };

    // head.jade compiled template
    templatizer["head"] = function tmpl_head() {
        return '<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/>';
    };

    // includes/formInput.jade compiled template
    templatizer["includes"]["formInput"] = function tmpl_includes_formInput() {
        return '<div class="form-group"><label data-hook="label"></label><div data-hook="message-container"><div data-hook="message-text" class="alert alert-danger"></div></div><input class="form-control"/></div>';
    };

    // includes/todo.jade compiled template
    templatizer["includes"]["todo"] = function tmpl_includes_todo() {
        return '<li class="todo list-group-item"><a data-hook="task"></a><span class="btn-group btn-group-xs pull-right"><a data-hook="action-edit" class="btn btn-default">edit</a><a href="#" data-hook="action-delete" class="btn btn-danger">delete</a></span></li>';
    };

    // pages/home.jade compiled template
    templatizer["pages"]["home"] = function tmpl_pages_home() {
        return '<section class="page home"><h2>Welcome to a skeleton for Daily To Do</h2><ul data-hook="todos-list" class="list-group"></ul><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">.fetch()</button><a href="/todo/add" class="btn btn-default">Add To Do</a></div></section>';
    };

    // pages/info.jade compiled template
    templatizer["pages"]["info"] = function tmpl_pages_info() {
        return '<section class="page pageTwo"><h2>Simple Page Example</h2><p>This page was rendered by a simple page view file at client/pages/info.js.</p></section>';
    };

    // pages/todoAdd.jade compiled template
    templatizer["pages"]["todoAdd"] = function tmpl_pages_todoAdd() {
        return '<section class="page add-todo"><h2>Add To Do</h2><p>This form and all behavior is defined by the form view in <code>client/forms/todo.js</code>.</p><p>The same form-view is used for both editing and creating new users.</p><form data-hook="todo-form"><fieldset data-hook="field-container"></fieldset><div class="buttons"><button data-hook="reset" type="submit" class="btn">Submit</button></div></form></section>';
    };

    // pages/todoEdit.jade compiled template
    templatizer["pages"]["todoEdit"] = function tmpl_pages_todoEdit() {
        return '<section class="page edit-todo"><h2>Edit To Do</h2><p>This form and all behavior is defined by the form view in <code>client/forms/todo.js</code>.</p><p>The same form-view is used for both editing and creating new users.</p><form data-hook="todo-form"><fieldset data-hook="field-container"></fieldset><div class="buttons"><button data-hook="reset" type="submit" class="btn">Submit</button></div></form></section>';
    };

    // pages/todoView.jade compiled template
    templatizer["pages"]["todoView"] = function tmpl_pages_todoView() {
        return '<section class="page view-todo"><h2 data-hook="task"></h2><div class="buttons"><a data-hook="edit" class="btn">Edit</a><button data-hook="delete" class="btn">Delete</button></div></section>';
    };

    return templatizer;
}));