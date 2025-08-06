
        // Tab functionality
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname) {
            for (let tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (let tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        // Mobile menu functionality
        var sidemenu = document.getElementById("sidemenu");

        function openmenu() {
            sidemenu.style.right = "0";
        }

        function closemenu() {
            sidemenu.style.right = "-200px";
        }

        // Form submission
        function submitForm(event) {
            event.preventDefault();
            alert("Thank you for your message! I'll get back to you soon.");
            event.target.reset();
        }

        // CV download
       // function downloadCV() {
          //  alert("CV download feature would be implemented with actual CV file.");
        //}

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                // Close mobile menu if open
                if (window.innerWidth <= 600) {
                    closemenu();
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const nav = document.querySelector('nav');
            const menuIcon = document.querySelector('.fa-bars');
            
            if (window.innerWidth <= 600 && 
                !nav.contains(event.target) && 
                !menuIcon.contains(event.target)) {
                closemenu();
            }
        });
