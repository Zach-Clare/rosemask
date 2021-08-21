(function() {

    let rosemask_viewport = 130;
    
    //insert HTML and CSS
    let rosemask = document.createElement("div");
    rosemask.setAttribute("id", "rosemask");
    rosemask.style.position = "fixed";
    rosemask.style.width = "100%";

    let rosemask_upper = document.createElement("div");
    rosemask_upper.setAttribute("id", "rosemask_upper");
    rosemask.appendChild(rosemask_upper);
    rosemask_upper.style.height = "1000px";
    rosemask_upper.style.width = "100%";
    rosemask_upper.style.backgroundColor = "rgba(0,0,0,0.7)";

    let rosemask_centre = document.createElement("div");
    rosemask_centre.setAttribute("id", "rosemask_centre");
    rosemask.appendChild(rosemask_centre);
    rosemask_centre.style.width = "100%";
    rosemask_centre.style.height = rosemask_viewport + "px";

    let rosemask_lower = document.createElement("div");
    rosemask_lower.setAttribute("id", "rosemask_lower");
    rosemask.appendChild(rosemask_lower);
    rosemask_lower.style.height = "1000px";
    rosemask_lower.style.width = "100%";
    rosemask_lower.style.backgroundColor = "rgba(0,0,0,0.7)";

    document.body.appendChild(rosemask);

    //make rosemask follow mouse    
    const mouseMove = (e) => {
        let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        let height_offset = (1000 + 1000 + rosemask_viewport) / 2;
        rosemask.style.top = 0 - scrollTop - height_offset + e.pageY + 'px';
        console.log(scrollTop, height_offset, e.pageY, rosemask.style.top);
    }

    document.addEventListener('mousemove', mouseMove);
})();