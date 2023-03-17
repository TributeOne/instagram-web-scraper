#Instagram Web Scraper

### _English:_
[TOC]

This is an MVP of the Instagram Web Scraper that I developed in my spare time.

####Features:

Automatic scraping of the story carousel including _userName_ , _storySeen_ and _profileImage_.

```javascript
  {
    userName: "robin__schulz",
    storySeen: false,
    profileImage: "https://scontent-dus1-1.cdninstagram.com/v/t51.2885-19/209256646_200517305311614_1946230682601995395_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-dus1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=R8RyAJk0PU4AX8zVxe3&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AfBttp7DXSQCvTxyUWzgOpbJY_ktf3G_SnToHSQ9rZAfCA&oe=6415076F&_nc_sid=022a36"
  }
```
Instagram Web Scraper is a web scraper that extracts all the information you need directly from your browser without having to access Instagram's API directly. Extracting data with a web scraper is less complicated than API calls because Instagram keeps its API endpoints under wraps and wants to avoid their misuse. Instagram is constantly changing the way its API endpoints work, which makes constant use of the API nearly impossible. In addition, Instagram only allows API requests at certain intervals, which makes it very difficult to extract data. Making changes to the web scraper can be done faster and easier than reverse engineering an entire API.

I'm extremely annoyed with how Instagram is being ruined by Meta. Instagram Reels are extremely addictive, which is why I would love to delete the app. However, since I still want to stay in touch with my friends, I had the idea to create my own very superficial clone for personal use. The clone should allow me to view only my friends' stories and feed.

#####Features:

- Instagram can no longer access my microphone or indirectly read data from my phone.
- I can filter my feed by date again like before.
- I can filter out ads automatically.

#####Disadvantages:

- No more DMs available.
- Story feature set is severely limited.
- In general, images and feed load a bit slower than directly in the app.

####Installation:

Just download the project with the command:

> `$ git clone URL`

Download the required dependencies:


> `$ yarn`

####Installation:

In the `index.ts` you need to specify the path where your web browser is located that you want to use.

```sh
executablePath: '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge'
```


Your user profile is stored in `./WebProfiles/InstergramProfile1`.

By default, the browser _"Edge"_ under MacOS is stored here. I recommend this browser, because I personally want to distinguish between the browser I automate and actually use productively, so that it doesn't constantly restart with the program. Also, the performance under _"Edge"_ is better than Chrome itself.

Run the program with the command:

> `$ yarn start`

First of all, you should start Webscraper once and log in to Instagram. Make sure you check the _"Stay logged in"_ box.

####Documentation:

In the directory `src/stories/storyCarousel` you can find the files `storyCarousel.ts` and`storyCarouselButtons.ts`.

In the file `storyCarouselButtons.ts` there is a class in which the functions for clicking the buttons are implemented:

`storyCarouselButton.click.nextOnInit`: This function clicks the first time on the right arrow in the carousel. The parameter _"OnInit"_ is needed because the XPath of the buttons changes after the first click.

storyCarouselButton.click.next`: This function allows to click the right arrow in the carousel after the first click.

storyCarouselButton.click.back`: This function allows you to click the left arrow in the carousel after the first click.

`storyCarouselButton.checkAvailability`: This function returns _"true"_ if the button _"OnInit"_ exists. It could happen that the user is shown too few available stories, so that the continue button does not exist at all.

`storyCarouselButton.checkAvailability`: When the end of the carousel is reached, the button disappears.

In the file `storyCarousel.ts` the data in the story carousel is recorded. The code is commented to explain how each function works.

More documentation and tests will follow. :)

If you are interested in helping to develop the scraper, feel free to contact me on Discord: [TributeOne#2542][anchor-id].

[anchor-id]: https://discord.gg/user/TributeOne#2542

---
### _German:_
[TOC]

Dies ist ein MVP des Instagram Web Scrapers, den ich in meiner Freizeit entwickelt habe.

####Funktionsumfang:

Automatisches Scrapen des Story-Carousels inkl. _userName_ , _storySeen_ und _profileImage_.

```javascript
  {
    userName: "robin__schulz",
    storySeen: false,
    profileImage: "https://scontent-dus1-1.cdninstagram.com/v/t51.2885-19/209256646_200517305311614_1946230682601995395_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-dus1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=R8RyAJk0PU4AX8zVxe3&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AfBttp7DXSQCvTxyUWzgOpbJY_ktf3G_SnToHSQ9rZAfCA&oe=6415076F&_nc_sid=022a36"
  }
```
Instagram Web Scraper ist ein Webscraper, der alle benötigten Informationen direkt aus dem Browser extrahiert, ohne direkt auf die API von Instagram zugreifen zu müssen. Das Auslesen der Daten mit einem Webscraper ist weniger kompliziert als API-Aufrufe, weil Instagram seine API-Endpunkte unter Verschluss hält und deren Missbrauch vermeiden möchte. Instagram ändert ständig die Funktionsweise seiner API-Endpunkte, was eine konstante Nutzung der API nahezu unmöglich macht. Außerdem erlaubt Instagram API-Anfragen nur in bestimmten Zeitabständen, was das Auslesen von Daten stark erschwert. Änderungen am Webscraper können schneller und einfacher durchgeführt werden als eine ganze API zu reverse engineeren.

Ich bin extrem davon genervt, wie Instagram von Meta ruiniert wird. Instagram Reels machen extrem süchtig, weshalb ich die App am liebsten löschen würde. Da ich aber immer noch in Kontakt mit meinen Freunden bleiben möchte, hatte ich die Idee, einen eigenen sehr oberflächlichen Klon für private Zwecke zu entwickeln. Der Klon soll es mir ermöglichen, ausschließlich die Storys und den Feed meiner Freunde anzusehen.

#####Features:

- Instagram kann nicht mehr auf mein Mikrofon zugreifen oder indirekt Daten von meinem Handy auslesen.
- Ich kann meinen Feed wieder wie früher nach Datum filtern.
- Ich kann Werbung automatisch ausfiltern.

#####Nachteile:

- Keine DMs mehr verfügbar.
- Story-Funktionsumfang wird stark eingeschränkt.
- Allgemein laden Bilder und Feed etwas langsamer als direkt in der App.

####Installation:

Laden Sie das Projekt einfach mit dem Befehl herunter:

> `$ git clone URL`

Laden Sie die benötigten Abhängigkeiten herunter:


> `$ yarn`

####Einrichtung:

In der `index.ts` müssen Sie den Pfad angeben, in dem sich Ihr Webbrowser befindet, den Sie verwenden möchten.

```sh
executablePath: '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge'
```


Ihr Benutzerprofil wird in `./WebProfiles/InstergramProfile1` gespeichert.

Standardmäßig ist hier der Browser _"Edge"_ unter MacOS hinterlegt. Ich empfehle diesen Browser, da ich persönlich zwischen dem Browser, den ich automatisiere und tatsächlich produktiv verwende, unterscheiden möchte, damit dieser nicht ständig mit dem Programm neu startet. Außerdem ist die Performance unter _"Edge"_ besser als bei Chrome selbst.

Führen Sie das Programm mit dem Befehl aus:

> `$ yarn start`

Zuallererst sollten Sie einmal den Webscraper starten und sich bei Instagram anmelden. Achten Sie darauf, dass Sie den Haken bei _"Angemeldet bleiben"_ setzen.

####Dokumentation:

In dem Verzeichnis `src/storys/storyCarousel` sind die Dateien `storyCarousel.ts`  und`storyCarouselButtons.ts` zu finden.

In der Datei `storyCarouselButtons.ts` befindet sich eine Klasse, in der die Funktionen zum Klicken der Buttons implementiert sind:

`storyCarouselButton.click.nextOnInit`: Diese Funktion klickt das erste Mal auf den Pfeil nach rechts im Carousel. Der Parameter _"OnInit"_ wird benötigt, da sich der XPath der Buttons nach dem ersten Klick ändert.

`storyCarouselButton.click.next`: Diese Funktion ermöglicht das Klicken auf den Pfeil nach rechts im Carousel, nachdem bereits das erste Mal geklickt wurde.

`storyCarouselButton.click.back`: Diese Funktion ermöglicht das Klicken auf den Pfeil nach links im Carousel, nachdem bereits das erste Mal geklickt wurde.

`storyCarouselButton.checkAvailability`: Diese Funktion gibt _"true"_ zurück, falls der Button _"OnInit"_  existiert. Es könnte vorkommen, dass der Benutzer zu wenige verfügbare Storys angezeigt bekommt, sodass der Weiter-Button gar nicht existiert.

`storyCarouselButton.checkAvailability`: Wenn das Ende des Carousels erreicht wird, verschwindet der Button.

In der Datei `storyCarousel.ts` werden die Daten im Story Carousel aufgenommen. Der Code ist kommentiert, um die Funktionsweise der einzelnen Funktionen zu erklären.

Weitere Dokumentationen und Tests werden folgen. :)

Falls du Interesse daran hast, den Scraper mitzuentwickeln, kontaktiere mich gerne auf Discord: [TributeOne#2542][anchor-id].

[anchor-id]: https://discord.gg/user/TributeOne#2542# instagram-web-scraper
