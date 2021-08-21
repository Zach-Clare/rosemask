(function() {
    //insert CSS
    var head = document.getElementsByTagName('HEAD')[0]; 
    var link = document.createElement('link');
    link.rel = 'stylesheet'; 
    link.type = 'text/css';
    link.href = 'rosemask.css'; 
    link.id = "rosemask_css";
    head.appendChild(link); 

    //insert HTML
    let rosemask = document.createElement("div");
    rosemask.setAttribute("id", "rosemask");

    rosemask_upper = document.createElement("div");
    rosemask_upper.setAttribute("id", "rosemask_upper");
    rosemask.appendChild(rosemask_upper);

    rosemask_centre = document.createElement("div");
    rosemask_centre.setAttribute("id", "rosemask_centre");
    rosemask.appendChild(rosemask_centre);

    rosemask_lower = document.createElement("div");
    rosemask_lower.setAttribute("id", "rosemask_lower");
    rosemask.appendChild(rosemask_lower);

    document.body.appendChild(rosemask);
})();