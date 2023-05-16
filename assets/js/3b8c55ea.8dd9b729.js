"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[3217],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,k=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return t?a.createElement(k,l(l({ref:n},d),{},{components:t})):a.createElement(k,l({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={},l="Installation",o={unversionedId:"installation",id:"installation",title:"Installation",description:"Homebrew for macOS",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/crowdin-cli/installation",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/cli3/website/docs/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/crowdin-cli/"},next:{title:"Configuration",permalink:"/crowdin-cli/configuration"}},c={},p=[{value:"Homebrew for macOS",id:"homebrew-for-macos",level:2},{value:"Windows",id:"windows",level:2},{value:"Installer",id:"installer",level:3},{value:"Chocolatey",id:"chocolatey",level:3},{value:"Debian",id:"debian",level:2},{value:"RPM",id:"rpm",level:2},{value:"Arch Linux",id:"arch-linux",level:2},{value:"NPM",id:"npm",level:2},{value:"Docker",id:"docker",level:2},{value:"Standalone version",id:"standalone-version",level:2},{value:"Installation on Linux and macOS",id:"installation-on-linux-and-macos",level:3},{value:"Installation on Windows",id:"installation-on-windows",level:3},{value:"Nix package manager",id:"nix-package-manager",level:2},{value:"Further Reading",id:"further-reading",level:2}],d={toc:p},s="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"homebrew-for-macos"},"Homebrew for macOS"),(0,r.kt)("p",null,"To install the Crowdin CLI with ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," (the package manager for macOS):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap crowdin/crowdin\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install crowdin@3\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/crowdin/homebrew-crowdin"},"Homebrew Tap Reference"),"."),(0,r.kt)("h2",{id:"windows"},"Windows"),(0,r.kt)("h3",{id:"installer"},"Installer"),(0,r.kt)("p",null,"Download and run ",(0,r.kt)("a",{parentName:"p",href:"https://downloads.crowdin.com/cli/v3/crowdin.exe"},"installer for Windows"),"."),(0,r.kt)("h3",{id:"chocolatey"},"Chocolatey"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"choco install crowdin-cli\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://community.chocolatey.org/packages/crowdin-cli"},"Chocolatey Package Reference"),"."),(0,r.kt)("h2",{id:"debian"},"Debian"),(0,r.kt)("p",null,"We sign all our packages with the Crowdin Signing Key."),(0,r.kt)("p",null,"Download and install the public signing key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO - https://artifacts.crowdin.com/repo/GPG-KEY-crowdin | sudo apt-key add -\n")),(0,r.kt)("p",null,"Using the following command, create the ",(0,r.kt)("inlineCode",{parentName:"p"},"crowdin.list")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apt/sources.list.d")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "deb https://artifacts.crowdin.com/repo/deb/ /" > /etc/apt/sources.list.d/crowdin.list\n')),(0,r.kt)("p",null,"And your repository is ready for use. You can install the Crowdin CLI Debian package with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update && sudo apt-get install crowdin3\n")),(0,r.kt)("p",null,"To install the Crowdin CLI manually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://artifacts.crowdin.com/repo/deb/crowdin3.deb -O crowdin.deb\nsudo dpkg -i crowdin.deb\n")),(0,r.kt)("h2",{id:"rpm"},"RPM"),(0,r.kt)("p",null,"We sign all our packages with the Crowdin Signing Key."),(0,r.kt)("p",null,"Download and install the public signing key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rpm --import https://artifacts.crowdin.com/repo/GPG-KEY-crowdin\n")),(0,r.kt)("p",null,"Installing from the RPM repository"),(0,r.kt)("p",null,"Create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"crowdin.repo")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/yum.repos.d")," directory containing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[crowdin]\nname=Crowdin repository\nbaseurl=https://artifacts.crowdin.com/repo/rpm\ngpgcheck=1\ngpgkey=https://artifacts.crowdin.com/repo/GPG-KEY-crowdin\nenabled=1\n")),(0,r.kt)("p",null,"And your repository is ready for use. You can now install Crowdin CLI with one of the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install crowdin3\nsudo dnf install crowdin3\n")),(0,r.kt)("p",null,"To install the Crowdin CLI manually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://artifacts.crowdin.com/repo/rpm/crowdin3.rpm -O crowdin.rpm\nsudo rpm -U crowdin3.rpm\n")),(0,r.kt)("h2",{id:"arch-linux"},"Arch Linux"),(0,r.kt)("p",null,"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://aur.archlinux.org/packages/crowdin-cli"},"Crowdin CLI package page")," on Arch Linux user repository."),(0,r.kt)("h2",{id:"npm"},"NPM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g @crowdin/cli\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@crowdin/cli"},"NPM Package Reference"),"."),(0,r.kt)("h2",{id:"docker"},"Docker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull crowdin/cli\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/crowdin/cli"},"Docker Container Reference"),"."),(0,r.kt)("h2",{id:"standalone-version"},"Standalone version"),(0,r.kt)("p",null,"Crowdin CLI can be installed as a stand-alone Java application. ",(0,r.kt)("a",{parentName:"p",href:"https://downloads.crowdin.com/cli/v3/crowdin-cli.zip"},"Download for macOS, Linux and Windows")),(0,r.kt)("h3",{id:"installation-on-linux-and-macos"},"Installation on Linux and macOS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download ",(0,r.kt)("inlineCode",{parentName:"li"},"crowdin-cli.zip")," using the link above"),(0,r.kt)("li",{parentName:"ul"},"Unpack it"),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"./install-crowdin-cli.sh")," in the terminal with sudo rights in order to add crowdin command to your terminal")),(0,r.kt)("h3",{id:"installation-on-windows"},"Installation on Windows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download ",(0,r.kt)("inlineCode",{parentName:"li"},"crowdin-cli.zip")," using the link above"),(0,r.kt)("li",{parentName:"ul"},"Extract it's content to the place where you want Crowdin CLI to be stored"),(0,r.kt)("li",{parentName:"ul"},"Open Command Prompt as an Administrator",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click Start"),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("em",{parentName:"li"},"Start Search")," box, type ",(0,r.kt)("inlineCode",{parentName:"li"},"cmd"),", and then press ",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl"),"+",(0,r.kt)("inlineCode",{parentName:"li"},"Shift"),"+",(0,r.kt)("inlineCode",{parentName:"li"},"Enter")),(0,r.kt)("li",{parentName:"ul"},"If the ",(0,r.kt)("em",{parentName:"li"},"User Account Control")," dialog box appears, confirm that the action it displays is what you want, and then click ",(0,r.kt)("em",{parentName:"li"},"Continue")))),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"setup-crowdin.bat")," script in order to add crowdin command to the Command Prompt"),(0,r.kt)("li",{parentName:"ul"},"Restart your Command Prompt")),(0,r.kt)("h2",{id:"nix-package-manager"},"Nix package manager"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nix-shell -p crowdin-cli\n")),(0,r.kt)("p",null,"A nix-shell will temporarily modify your ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH")," environment variable. This can be used to try a piece of software before deciding to permanently install it."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://search.nixos.org/packages?show=crowdin-cli"},"Nix package reference"),"."),(0,r.kt)("h2",{id:"further-reading"},"Further Reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/crowdin"},"Commands"))))}u.isMDXComponent=!0}}]);