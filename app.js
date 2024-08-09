





let mainScreen = document.querySelector(".example");

const clickExample = () => {
    let clickButton = document.querySelector(".example");
    clickButton.addEventListener("click", () =>{
        mainScreen.innerHTML = "Hey, my name is Frantzy & Im a Passionate and trained tech enthusiast with 7 years’ experience in customer service, capable of seeing big picture IT viewpoints & user problem points. Knowledge base rooted in the following systems: BeyondTrust, Atlassian (Jira & Confluence), Datadog and Google Analytics. Excels in autonomy during independent projects, as well as collaborative teamwork scenarios. A dedicated result-oriented entry level information technology specialist with hands on training in Linux, AWS, & productivity software.  Recognized for a quick ability to learn, communication skills, and attention to detail."
    });
};

clickExample()



const addhtml = () => {
    let title = document.querySelector(".contact");
    title.innerHTML = "Email: Frantzy.silien@gmail.com   Phone Number: 555-555-5555 ";

  };

  const launchPrompt = () => {
    let dynamicText = prompt("Whats your name ?");
    let screen = document.querySelector(".screen");
 screen.innerHTML = "Welcome " + dynamicText +"! 😁";
};

