(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{397:function(e,t,o){e.exports=o.p+"assets/img/ssdttime.54f2ba0d.png"},442:function(e,t,o){"use strict";o.r(t);var r=o(25),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"ssdts-the-easy-way"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssdts-the-easy-way"}},[e._v("#")]),e._v(" SSDTs: The easy way")]),e._v(" "),r("p",[e._v("So here we'll be using a super simple tool made by CorpNewt: "),r("a",{attrs:{href:"https://github.com/corpnewt/SSDTTime",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDTTime"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("What this tool does is, it dumps your DSDT from your firmware, and then creates SSDTs based off your DSDT. "),r("strong",[e._v("This must be done on the target machine running either Windows or Linux")])]),e._v(" "),r("h2",{attrs:{id:"so-what-can-t-ssdttime-do"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#so-what-can-t-ssdttime-do"}},[e._v("#")]),e._v(" So what "),r("strong",[e._v("CAN'T")]),e._v(" SSDTTime do")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("HEDT SSDTs")]),e._v(":\n"),r("ul",[r("li",[e._v("The ACPI is odd on these platforms so manual work is required")]),e._v(" "),r("li",[e._v("This includes X79, X99 and X299 systems")]),e._v(" "),r("li",[e._v("Prebuilt can be found here: "),r("RouterLink",{attrs:{to:"/Universal/ec-fix.html"}},[e._v("Embedded Controller")])],1)])]),e._v(" "),r("li",[r("strong",[e._v("Laptop EC fix")]),e._v(":\n"),r("ul",[r("li",[e._v("This is because you do not want the EC powered off")]),e._v(" "),r("li",[e._v("Prebuilt can be found here: "),r("RouterLink",{attrs:{to:"/Universal/ec-fix.html"}},[e._v("Embedded Controller")])],1)])]),e._v(" "),r("li",[r("strong",[e._v("SSDT-PNLF")]),e._v(":\n"),r("ul",[r("li",[e._v("Need to be configured to your system")])])]),e._v(" "),r("li",[r("strong",[e._v("SSDT-GPI0")]),e._v(":\n"),r("ul",[r("li",[e._v("Need to be configured to your system")])])]),e._v(" "),r("li",[r("strong",[e._v("AWAC and RTC0 SSDTs")]),e._v(":\n"),r("ul",[r("li",[e._v("300 series Intel boards will also need to figure this out (Z390 systems are most common for requiring this but some Gigabyte Z370 do as well)")])])]),e._v(" "),r("li",[r("strong",[e._v("PMC SSDT")]),e._v(":\n"),r("ul",[r("li",[e._v("For fixing 300 series Intel NVRAM")]),e._v(" "),r("li",[e._v("Prebuilt can be found here: "),r("RouterLink",{attrs:{to:"/Universal/nvram.html"}},[e._v("NVRAM PMC")])],1)])]),e._v(" "),r("li",[r("strong",[e._v("USBX SSDT")]),e._v(":\n"),r("ul",[r("li",[e._v("This is included on sample SSDTs but SSDTTime only makes the SSDT-EC part, Skylake and newer users can grab a pre-built here: "),r("a",{attrs:{href:"https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/SSDT-USBX.aml",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-USBX.aml"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[r("strong",[e._v("RHUB SSDT")]),e._v(":\n"),r("ul",[r("li",[e._v("if you have a 10th gen CPU, you'll need to either use the prebuilt or manually create it.")])])])]),e._v(" "),r("p",[e._v('For users who don\'t have all the options available to them in SSDTTime, you can follow the "SSDTs: The long way" section. You can still use SSDTTime for SSDTs it does support.')]),e._v(" "),r("h2",{attrs:{id:"running-ssdttime"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#running-ssdttime"}},[e._v("#")]),e._v(" Running SSDTTime")]),e._v(" "),r("p",[e._v("Run the "),r("code",[e._v("SSDTTime.bat")]),e._v(" file as Admin on the target machine and you should see something like this:")]),e._v(" "),r("p",[r("img",{attrs:{src:o(397),alt:""}})]),e._v(" "),r("p",[e._v("What are all these options?:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("1. FixHPET - Patch out IRQ Conflicts")]),e._v(" "),r("ul",[r("li",[e._v("IRQ patching, mainly needed for X79, X99 and laptop users(use option "),r("code",[e._v("C")]),e._v(" to omit conflicting legacy IRQs)")])])]),e._v(" "),r("li",[r("code",[e._v("2. FakeEC - OS-aware Fake EC")]),e._v(" "),r("ul",[r("li",[e._v("This is the SSDT-EC, required for Catalina users")])])]),e._v(" "),r("li",[r("code",[e._v("3. PluginType - Sets plugin-type = 1 on CPU0/PR00")]),e._v(" "),r("ul",[r("li",[e._v("This is the SSDT-PLUG, for Intel only")])])]),e._v(" "),r("li",[r("code",[e._v("4. Dump DSDT - Automatically dump the system DSDT")]),e._v(" "),r("ul",[r("li",[e._v("Dumps your DSDT from your firmware")])])])]),e._v(" "),r("p",[e._v("What we want to do is select option "),r("code",[e._v("4. Dump DSDT")]),e._v(" first, then select the appropriate option(s) for your system.")]),e._v(" "),r("blockquote",[r("p",[e._v("What about USBX?")])]),e._v(" "),r("p",[e._v("For Skylake and newer plus AMD, you can grab a pre-built file here: "),r("a",{attrs:{href:"https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/SSDT-USBX.aml",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-USBX.aml"),r("OutboundLink")],1),e._v(". This file is plug and play and requires no device configuration, "),r("strong",[e._v("do not use on Broadwell and older")]),e._v(".")]),e._v(" "),r("p",[r("strong",[e._v("Troubleshooting note")]),e._v(": See "),r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Install-Guide/troubleshooting/troubleshooting.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("General Troubleshooting"),r("OutboundLink")],1),e._v(" if you're having issues running SSDTTime")]),e._v(" "),r("h2",{attrs:{id:"adding-to-opencore"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#adding-to-opencore"}},[e._v("#")]),e._v(" Adding to OpenCore")]),e._v(" "),r("p",[e._v("Don't forget that SSDTs need to be added to Opencore, reminder that .aml is complied, .dsl is code. "),r("strong",[e._v("Add only the .aml file")]),e._v(":")]),e._v(" "),r("ul",[r("li",[e._v("EFI/OC/ACPI")]),e._v(" "),r("li",[e._v("config.plist -> ACPI -> Add")])]),e._v(" "),r("p",[e._v("Reminder that Cmd/Crtl+R with ProperTree pointed at your OC folder will add all your SSDTs, kexts and .efi drivers to the config for you. "),r("strong",[e._v("Do not add your DSDT to OpenCore, its already in your firmware")]),e._v(". If you are unsure what this is referring to, go back to the OpenCore guide and select your config based of the architecture of your CPU.")]),e._v(" "),r("p",[e._v("For those who do not yet have a config.plist, you'll want to next head back to your respective OpenCore guides and create the config.plist:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Install-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCore Install guide"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Users of "),r("code",[e._v("FixHPET")]),e._v(" will also need to merge oc_patches.plist into their config.plist")]),e._v(" "),r("p",[e._v("Steps to do this:")]),e._v(" "),r("ul",[r("li",[e._v("Open both files,")]),e._v(" "),r("li",[e._v("Delete the "),r("code",[e._v("ACPI -> Patch")]),e._v(" section from config.plist")]),e._v(" "),r("li",[e._v("Copy the "),r("code",[e._v("ACPI -> Patch")]),e._v(" section from patches.plist")]),e._v(" "),r("li",[e._v("Paste into where old patches were in config.plist")])])])}),[],!1,null,null,null);t.default=i.exports}}]);