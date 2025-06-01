console.log("Script loaded successfully!");

window.onload = () => { 

   
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    
    gsap.set('body', { opacity: 0 }); 
    gsap.set('#preloader .preloader-content', { opacity: 0 }); 


    const tlPreloader = gsap.timeline({
        onComplete: () => {
           
            gsap.to('body', { opacity: 1, duration: 0.5 });
            startHeroIntroAnimation(); 
        }
    });

    tlPreloader.to('#preloader .preloader-content', { 
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    })
    .to('#preloader .spinner', { 
        rotation: 360 * 2, 
        duration: 1.5,
        ease: "power2.inOut"
    }, "<") 
    .to('#preloader', { 
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.in",
        delay: 0.5, 
        onComplete: () => {
            document.getElementById('preloader').style.display = 'none'; 
        }
    });


    const customCursor = document.querySelector('.custom-cursor');
    const cursorCircle = document.querySelector('.cursor-circle');
    const cursorDot = document.querySelector('.cursor-dot');
    const interactiveElements = document.querySelectorAll('a, button, input[type="submit"], select, textarea, input[type="text"], input[type="email"], input[type="tel"]');

    gsap.set(customCursor, { xPercent: -50, yPercent: -50 });

    document.addEventListener('mousemove', (e) => {
        gsap.to(customCursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "power2.out"
        });
    });

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            customCursor.classList.add('active');
            gsap.to(cursorCircle, { scale: 1.5, opacity: 0.3, duration: 0.3, ease: "power2.out" });
            gsap.to(cursorDot, { scale: 0, duration: 0.3, ease: "power2.out" });
        });
        el.addEventListener('mouseleave', () => {
            customCursor.classList.remove('active');
            gsap.to(cursorCircle, { scale: 1, opacity: 0.8, duration: 0.3, ease: "power2.out" });
            gsap.to(cursorDot, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
    });

    function startHeroIntroAnimation() {
        const tlHero = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

        tlHero.from(".main-header", { y: -100, opacity: 0, duration: 0.8 }, "+=0.2") 
              .from(".anim-header-item", { opacity: 0, y: -20, stagger: 0.1, duration: 0.5 }, "-=0.5")
              .from(".hero-content h2", { opacity: 0, y: 50, duration: 1.2 }, "-=0.3")
              .from(".hero-content p", { opacity: 0, y: 30, duration: 1 }, "-=0.7")
              .from(".anim-hero-button", { opacity: 0, scale: 0.8, duration: 0.8 }, "-=0.5")
              .from(".anim-hero-visual", { opacity: 0, x: 100, duration: 1.2, ease: "back.out(1.7)" }, "-=0.8");
    }


  
    gsap.utils.toArray('.anim-fade-up').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 80,
            scale: 0.95,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
            }
        });
    });

   
    gsap.utils.toArray('.anim-feature-item').forEach((item, i) => {
        gsap.from(item, {
            opacity: 0,
            y: 100,
            scale: 0.9,
            duration: 0.8,
            ease: "back.out(1.2)",
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
            }
        });
    });


    gsap.utils.toArray('.anim-section-title').forEach(title => {
        gsap.from(title, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
            }
        });
    });



    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        document.getElementById('translator').scrollIntoView({ behavior: 'smooth' });
    });


    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 180,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });



    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const number = document.getElementById('contactNumber').value;
        const message = document.getElementById('contactMessage').value;

        console.log("Contact Form Submitted:");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${number || 'N/A'}`);
        console.log(`Message: ${message}`);

        alert('Thank you for your message! We will get back to you soon.');

        contactForm.reset(); 
    });
}; 





async function translateText() {
  const sourceTextArea = document.getElementById("sourceText");
  const targetContainer = document.getElementById("translatedHTMLContainer"); 
  const targetTextArea = document.getElementById("targetText");
  const sourceLang = document.getElementById("sourceLang").value;
  const targetLang = document.getElementById("targetLang").value;
  const sourceText = sourceTextArea.value.trim();

  if (!sourceText) {
    targetTextArea.value = "Please enter some text to translate.";
    targetContainer.innerHTML = ""; 
    return;
  }

  targetTextArea.value = "Translating...";
  targetContainer.innerHTML = ""; 

  
  const htmlToTranslate = `<div>${sourceText}</div>`; 

  try {
    const response = await fetch("https://google-translate113.p.rapidapi.com/api/v1/translator/html", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": "google-translate113.p.rapidapi.com",
        "x-rapidapi-key": "3875d5d021msh2a3b0fcdf002cb8p1c2e4ajsnb54c524fde25"
      },
      body: JSON.stringify({
        from: sourceLang,
        to: targetLang,
        html: htmlToTranslate, //
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API response:", data); 

    if (data && data.trans) {
      
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = data.trans;
      targetTextArea.value = tempDiv.textContent || tempDiv.innerText || data.trans; 
    } else {
      targetTextArea.value = "Translation failed. Please try again.";
    }
    targetContainer.innerHTML = ""; 
  } catch (error) {
    console.error("Translation error:", error);
    targetTextArea.value = "Error during translation. Please try again.";
    targetContainer.innerHTML = "";
  }
}
  


document.getElementById("translateButton").addEventListener("click", translateText);
