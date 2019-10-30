# Arbeitsblatt 3

## Aufg. 1 - JSON
Für eine zukünftige Webanwendung sollen Sie eine JSON-Datei mit dem Namen "cities.json" anlegen. Diese Datei soll ein Array in JSON mit zehn deutschen Städte sortiert nach der größten Einwohnerzahl enthalten. Außerdem soll zu jeder Stadt auch das Bundesland gespeichert werden und jede Stadt als Objekt modelliert werden.

## Aufg.  2 - Module
Die von Ihnen angelegte JSON Datei soll man nun mit Hilfe von Javascript bearbeiten können, damit Sie diese auch für die geplante Webanwendung verwenden können. Um Dateien in Node.js lesen zu können müssen Sie zuerst das Modul "fs" einbinden. Daraufhin können Sie die Datei über den Aufruf fs.readFile() lesen und mit fs.writeFile() speichern.

Schreiben Sie ein Modul, das die Manipulation dieser JSON Datei erlaubt. Schreiben Sie Funktionen mit denen Sie Städte anhand des Namens finden und löschen können. Außerdem soll eine Funktion zum Hinzufügen neuer Städte implementiert werden. Den Pfad zur Datei können Sie innerhalb des Moduls als String definieren oder durch eine entsprechende Funktion mit übergeben.

Das nun programmierte Modul soll in einer anderen Datei aufgerufen und verwendet werden. Nachdem Sie über die Funktionen einige Änderungen durchgeführt haben geben Sie die aktuelle Liste der Städte auf der Konsole aus.


## Aufg. 3 - Errors
Um mit JSON Daten zu arbeiten müssen Sie JSON.parse() und JSON.stringify() anwenden. Sollte es sich bei einem Aufruf von JSON.parse() nicht um valides JSON handeln erhalten Sie eine Exception. Schreiben Sie einen try/catch Block um fs.readFile() , welcher diese Fehler abfängt und eine entsprechende Nachricht auf der Konsole ausgibt.Fällt Ihnen dabei etwas auf? Überprüfen Sie die Eigenschaften von try/catch in Javascript und überlegen Sie wie man dieses Problem lösen könnte.


## Aufg. 4 – Asynchrone Programmierung

Legen Sie nun ein zweite Datei an, welche Informationen zu diversen Usern enthält. Dabei soll mindestens der Vorname, Nachname, eine E-Mail, sowie der Wohnort eines Users enthalten sein. Die Wohnorte sollen sich an den Namen der Städte der "cities.json" orientieren.
Verwenden Sie für die Asynchrone Programmierung das Prinzip von Promises (6) und die Async Functions (7) mit Await().
Lesen Sie nun die Städte und User mit Node.js ein und verbinden Sie die Daten zu einem Datensatz. Geben Sie diese Daten wie folgt auf der Konsole aus:

Vorname: Max
Nachname: Mustermann
E-Mail: max@mustermann.de
Wohnort: Köln
Einwohner: 1061000
Bundesland: Nordrhein Westfalen
- - -
Vorname: Hans
...
