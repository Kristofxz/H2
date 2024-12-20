# Szállás Projektterv 2024

## 1. Összefoglaló 

A projektünk egy online platform, amely lehetővé teszi az emberek számára, hogy világszerte szállásokat béreljenek vagy adjanak ki. Az oldal lehetőséget biztosít rövid távú bérlésre, így utazók helyi lakásokban, házakban vagy egyéb különleges szállásokon szállhatnak meg, például jurtákban, faházakban vagy kastélyokban. A felhasználók böngészhetnek a különböző szálláslehetőségek között, és közvetlen kapcsolatba léphetnek a szállásadókkal. A projektünk különböző kategóriákat kínál, például családbarát, luxust kínáló szállások. A platform közösségi alapú, így a vendégek és a házigazdák értékelhetik egymást, segítve ezzel a megbízhatóságot.


## 2. A projekt bemutatása

Ez a projektterv a Szállás projektet mutatja be, amely 2024-09-30-tól 2024-12-2-ig tart, azaz összesen 63 napon keresztül fog futni. A projekten öt fejlesztő fog dolgozni, az elvégzett feladatokat pedig négy alkalommal fogjuk prezentálni a kurzus hallgatóinak, annak érdekében, hogy biztosítsuk a projekt folyamatos előrehaladását.

### 2.1. Rendszerspecifikáció

A rendszernek képesnek kell lennie arra, hogy a szállásadók megtudják hirdetni a szállásaikat, amiket a regisztrált szálláskeresők látnak és le tudnak foglalni. A szállásadók tudják modosítani és törölni hirdetéseiket. Valamint a szálláskeresők le tudják mondani a foglalásukat. Az admin képes törölni felhasználókat valamint tud hírdetéseket kiemelni, törölni, modosítani. 

### 2.2. Funkcionális követelmények

- Felhasználók kezelése (admin, szálláshirdető, szállásfoglaló)
- Felhasználói munkamenet megvalósítása több jogosultsági szinttel
- Foglalások kezelése
- Szállások kezelése
- Személyek kezelése
- Email-es kiértesítés a szállásfoglalásról
- (opcionális) Kiértékelés a szállásadórol
- (opcionális) Kiértékelés a szállásfoglalóról

Bővebben kifejtve:

1. Felhasználói fiókok kezelése
   - Regisztráció és bejelentkezés: Felhasználók (adminisztrátorok, szálláshirdetők, szállásfoglalók) képesek      regisztrálni és bejelentkezni.
   - Profilkezelés: Felhasználók frissíthetik személyes adataikat (név, email cím, jelszó stb.).
   - Jogosultsági szintek kezelése: Adminisztrátorok, szálláshirdetők, és szállásfoglalók különböző funkciókhoz férhetnek hozzá.
   - Felhasználók törlése: Az adminisztrátorok törölhetik bármely felhasználó fiókját.

2. Szállások hirdetése és kezelése
   - Szállás hirdetése: Szálláshirdetők képesek új szállásokat felvenni, feltöltve a szükséges adatokat (cím, leírás, képek, ár stb.).
   - Szállás szerkesztése és törlése: A szálláshirdetők módosíthatják vagy törölhetik saját hirdetéseiket.
   - Szállások részletezése: Szállásfoglalók megnézhetik a szállások részleteit (képek, ár, leírás).
   - Szállás keresés: Szállásfoglalók kulcsszavak és szűrők alapján (pl. ár, elhelyezkedés, felszereltség) kereshetnek szállásokat.

3. Foglalások kezelése
   - Szállásfoglalás: A szállásfoglalók képesek szállásokat lefoglalni megadott időintervallumokra.
   - Foglalás módosítása és lemondása: A szállásfoglalók módosíthatják vagy lemondhatják saját foglalásaikat.
   - Foglalási visszaigazolás: Minden foglalásról visszaigazoló email küldése a szállásfoglalónak és a szálláshirdetőnek.
   - Foglalások megtekintése: Szálláshirdetők és szállásfoglalók egyaránt megtekinthetik saját foglalásaikat.

4. Értékelések és visszajelzések (opcionális)
   - Szállásadó értékelése: Szállásfoglalók értékelhetik a szálláshirdetőt és a szállást a tartózkodás után.
   - Szállásfoglaló értékelése: A szálláshirdetők visszajelzést adhatnak a szállásfoglalókról.

5. Adminisztrátori funkciók
   - Felhasználók kezelése: Az adminisztrátorok felhasználókat tudnak törölni, figyelmeztetéseket küldeni, vagy jogosultságokat módosítani.
   - Hirdetések felügyelete: Adminisztrátorok képesek szálláshirdetéseket szerkeszteni, vagy törölni, ha azok sértik az oldal szabályzatát.

6. Email értesítések (opcionális)
   - Foglalási értesítés: Foglalási visszaigazolás emailen a szállásfoglalóknak és szálláshirdetőknek.
   - Szállásfoglalás lemondásának értesítése: Értesítés küldése emailben a szálláshirdetőknek, ha egy foglalást lemondanak.

7. Keresési és szűrési funkciók
   - Szállások szűrése: A szálláskeresők különböző szűrési feltételek alapján kereshetnek (ár, elhelyezkedés, felszereltség, értékelések).
   - Foglalási időpont ellenőrzése: Foglalható időpontok ellenőrzése valós időben a kiválasztott szállás részleteinél.


### 2.3. Nem funkcionális követelmények

- A kliens oldal böngészőfüggetlen legyen
- Az érzékeny adatokat biztonságosan tároljuk
- A legfrissebb technológiákat használja a rendszer

## 3. Költség- és erőforrás-szükségletek

Az erőforrásigényünk összesen 56.5 személynap, átlagosan 11.3 személynap/fő.

A rendelkezésünkre áll összesen 5 * 70 = 350 pont.


## 4. Szervezeti felépítés és felelősségmegosztás

A projekt megrendelője Dr. Pflanzner Tamás. A Szállás projektet a projektcsapat fogja végrehajtani, amely jelenleg öt fejlesztőből áll. A csapatban 5 pályakezdő webprogramozó található.
 
 - Péter Gergely (5. féléves PTI hallgató)
 - Magyari Máté (5. féléves PTI hallgató)
 - Pernyész Bettina (5. féléves PTI hallgató)
 - Fekete Kristóf (3. féléves MI hallagtó)
 - Nagy Ádám (3. féléves GI hallagtó)

### 4.1 Projektcsapat

A projekt a következő emberekből áll:

| Név          | Pozíció          |   E-mail cím (stud-os)        |
|--------------|------------------|-------------------------------|
| Nagy Ádám | Projektmenedzser | h268018@stud.u-szeged.hu    |
| Péter Gergely | Projekt tag      | h268639@stud.u-szeged.hu    |
| Magyari Máté   | Projekt tag      | h267383@stud.u-szeged.hu    |
| Pernyész Bettina | Projekt tag | h162796@stud.u-szeged.hu
| Fekete Kristóf | Projekt tag | h355812@stud.u-szeged.hu |


## 5. A munka feltételei

### 5.1. Munkakörnyezet

A projekt a következő munkaállomásokat fogja használni a munka során:

 - Munkaállomások: 5 db, Windows 11-es operációs rendszerrel
 - Lenovo ThinkBook 15 laptop (CPU: i5 5200U, RAM: 8 GB, GPU: Intel Iris Xe)
 - Lenovo Legion 5 laptop (CPU: i5 5005U, RAM: 8 GB, GPU: Nvidia 920M)
 - Lenovo IdeaPad 5 (CPU: i7 7700k, RAM: 16GB, GPU: Nvidia GTX1070)
 - Asus x515 (CPU: i3 7700k, RAM: 16GB, GPU: Nvidia GTX1070)
 - Asus VivoBook 15 Pro (CPU: Ryzen 5 5600h, RAM: 16GB, GPU: Nvidia RTX3050)

A projekt a következő technológiákat/szoftvereket fogja használni a munka során: 
 
 - MySQL
 - Node.js
 - Git verziókövető (GitLab)

### 5.2. Rizikómenedzsment

| Kockázat                                    | Leírás                                                                                                                                                                                     | Valószínűség | Hatás  |
|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|--------|
| Betegség                                  | Súlyosságtól függően hátráltatja vagy bizonyos esetekben teljes mértékben korlátozza a munkavégzőt, így az egész projektre kihatással van. Megoldás: a feladatok átcsoportosítása        | nagy       | erős |
| Kommunikációs fennakadás a csapattagokkal | A csapattagok között nem elégséges az információ áramlás, nem pontosan, esetleg késve vagy nem egyértelműen tájékoztatjuk egymást. Megoldás: még gyakoribb megbeszélések és ellenőrzések | kis        | erős |
| Távollét/Elutazás | Ha valamelyik csapattag tervezetten vagy spontán elutazna akkor az ő feladatát átcsoportosítjuk a többi csapatagra. | nagy | gyenge |
Csapattag feladja a kurzust | Ha valaki a csapatból úgy dönt nem kívánja teljesíteni a kurzust akkor komoly feladat átcsoportosításra lenne szükség és a pontok újra tárgyalására. | kis | erős |
Csapatag nem hajlandó hozzájárulni a munkához | Többszöri felhívásra sem hajlandó beletenni energiát és munkát a rákiosztott feladatra, ezáltal a többi csapattagnak lesz vele munkája ami által a pontokat máshogy szervezzük át. | kis | erős

## 6. Jelentések

### 6.1. Munka menedzsment
A munkát Nagy Ádám koordinálja. Fő feladata, hogy folyamatosan egyeztessen a csapattagokkal az előrehaladásról és a fellépő problémákról, esetlegesen a megoldásban is segítséget nyújhat a projekt csúszásának elkerülése végett. További feladata a heti szinten tartandó csoportgyűlések időpontjának és helyszínének leszervezése, erről discordon/messengeren tájékoztatja a projektcsapatot.

### 6.2. Csoportgyűlések

A projekt hetente ülésezik, hogy megvitassák az azt megelőző hét problémáit.

1. megbeszélés:
 - Időpont: 2024.09.23.
 - Hely: Bohém kocsma - Szeged, Szentháromság utca 6.
 - Résztvevők: Mindenki
 - Érintett témák: Ismerkedés, projekttéma kiválasztása

2. megbeszélés:
 - Időpont: 2024.09.30.
 - Hely: TIK – Szeged, Ady tér 10.
 - Résztvevők: Mindenki
 - Érintett témák: A projektben használt technológiák rögzítése, a projektterv áttekintése, szerepkörök és vállalások kiosztása, az első mérföldkő elkészítése.

3. Megbeszélés:
 - Időpont: 2024.10.01.
 - Hely: TIK – Szeged, Ady tér 10.
 - Résztvevők: Mindenki
 - Érintett témák: Egyeztetés az UML diagramokról, illetve az adatbázis táblák és kapcsolatok meghatározása


### 6.3. Minőségbiztosítás

Az elkészült terveket a terveken nem dolgozó csapattársak közül átnézik, hogy megfelel-e a specifikációnak és az egyes diagramtípusok összhangban vannak-e egymással. A meglévő rendszerünk helyes működését a prototípusok bemutatása előtt a tesztelési dokumentumban leírtak végrehajtása alapján ellenőrizzük és összevetjük a specifikációval, hogy az elvárt eredményt kapjuk-e. További tesztelési lehetőségek: unit tesztek írása az egyes modulokhoz vagy a kód közös átnézése (code review) egy, a vizsgált modul programozásában nem résztvevő csapattaggal. Szoftverünk minőségét a végső leadás előtt javítani kell a rendszerünkre lefuttatott kódelemzés során kapott metrikaértékek és szabálysértések figyelembevételével.
Az alábbi lehetőségek vannak a szoftver megfelelő minőségének biztosítására:
- Specifikáció és tervek átnézése
- Teszttervek végrehajtása
- Unit tesztek írása
- Kód átnézése

### 6.4. Átadás, eredmények elfogadása

A projekt eredményeit a gyakorlat vezető, Dr. Pflanzner Tamás fogja elfogadni. A projektterven változásokat csak a megrendelő írásos engedélyével lehet tenni. A projekt eredményesnek bizonyul, ha specifikáció helyes és határidőn belül készül el. Az esetleges késések pontlevonást eredményeznek. 
Az elfogadás feltételeire és beadás formájára vonatkozó részletes leírás a következő honlapon olvasható: https://okt.inf.szte.hu/rf1/

### 6.5. Státuszjelentés

Minden mérföldkő leadásnál a projekten dolgozók jelentést tesznek a mérföldkőben végzett munkájukról a a megadott sablon alapján. A gyakorlatvezetővel folytatott csapatmegbeszéléseken a csapat áttekintik és felmérik az eredményeket és teendőket. Továbbá gazdálkodnak az erőforrásokkal és szükség esetén a megrendelővel egyeztetnek a projektterv módosításáról.

## 7. A munka tartalma

### 7.1. Tervezett szoftverfolyamat modell és architektúra

A szoftver fejlesztésekor az agilis módszertant alkalmazzuk, mivel a folyamatos kommunikáció kiemelt fontosságú számunkra. A specifikációk a fejlesztés során rugalmasan változhatnak, és ezzel a megközelítéssel a leggyorsabban tudunk reagálni az új elvárásokra.

A webalkalmazás felépítése az MVC (modell-view-controller) mintát követi, ahol a szerver és a kliens egymástól függetlenül működnek.


### 7.2. Átadandók és határidők

A főbb átadandók és határidők a projekt időtartama alatt a következők:


| Szállítandó |                 Neve                                                        |   Határideje  |
|:-----------:|:---------------------------------------------------------------------------:|:-------------:|
|      D1     |      Projektterv és Gantt chart, prezentáció, egyéni jelentés               | 2024-10-14  |
|    P1+D2    |      UML, adatbázis- és képernyőtervek, prezentáció, egyéni jelentés        | 2024-10-28  |
|    P1+D3    |      Prototípus I. és tesztelési dokumentáció, egyéni jelentés              | 2024-11-18  |
|    P2+D4    |      Prototípus II. és frissített tesztelési dokumentáció, egyéni jelentés  | 2024-12-02  |

D - dokumentáció, P - prototípus

## 8. Feladatlista

A következőkben a tervezett feladatok részletes összefoglalása található.


### 8.1. Projektterv (1. mérföldkő)

Ennek a feladatnak az a célja, hogy megvalósításhoz szükséges lépéseket, az erőforrásigényeket, az ütemezést, a felelősöket és a feladatok sorrendjét meghatározzuk, majd vizualizáljuk Gantt diagram segítségével.

Részfeladatai a következők:

#### 8.1.1. Projektterv kitöltése

Felelős: Nagy Ádám

Tartam:  3 nap

Erőforrásigény:  1 személynap/fő

#### 8.1.2. Bemutató elkészítése

Felelős: Magyari Máté

Tartam:  2 nap

Erőforrásigény:  0.5 személynap

### 8.2. UML és adatbázis- és képernyőtervek (2. mérföldkő)

Ennek a feladatnak az a célja, hogy a rendszerarchitektúrát, az adatbázist és webalkalmazás kinézetét megtervezzük.

Részfeladatai a következők:

#### 8.2.1. Use Case diagram

Felelős: Péter Gergely

Tartam:  3 nap

Erőforrásigény:  1 személynap

#### 8.2.2. Class diagram

Felelős: Magyari Máté

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.2.3. Sequence diagram

Felelős: Fekete Kristóf

Tartam:  3 nap

Erőforrásigény:  2 személynap

#### 8.2.4. Egyed-kapcsolat diagram adatbázishoz

Felelős: Pernyész Bettina

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.2.5. Package diagram

Felelős: Nagy Ádám

Tartam:  3 nap

Erőforrásigény:  0.5 személynap

#### 8.2.6. Képernyőtervek

Felelős: Magyari Máté

Tartam:  3 nap

Erőforrásigény:  1 személynap

#### 8.2.7. Bemutató elkészítése

Felelős: Pernyész Bettina

Tartam:  1 nap

Erőforrásigény:  0.5 személynap

### 8.3. Prototípus I. (3. mérföldkő)

Ennek a feladatnak az a célja, hogy egy működő prototípust hozzunk létre, ahol a vállalt funkcionális követelmények nagy része már prezentálható állapotban van. 

Részfeladatai a következők:

#### 8.3.1. Felhasználók kezelése (admin, szálláshirdető, szállásfoglaló) (CR)

Felelős: Péter Gergely

Tartam:  5 nap

Erőforrásigény:  2 személynap

#### 8.3.2. Felhasználók kezelése (admin, szálláshirdető, szállásfoglaló) (UD)

Felelős: Fekete Kristóf

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.3.3. Felhasználók kezeléséhez szükséges adatok létrehozása az adatbázisban

Felelős: Pernyész Bettina

Tartam:  3 nap

Erőforrásigény:  1 személynap

#### 8.3.4. Felhasználói munkamenet megvalósítása több jogosultsági szinttel

Felelős: Magyari Máté

Tartam:  10 nap

Erőforrásigény:  2 személynap

#### 8.3.5. Foglalások kezelése (CR)

Felelős: Péter Gergely

Tartam:  3 nap

Erőforrásigény:  1 személynap

#### 8.3.6. Foglalások kezelése (UD)

Felelős: Fekete Kristóf

Tartam:  3 nap

Erőforrásigény:  1 személynap

#### 8.3.7. Szállások kezelése (CR)

Felelős: Pernyész Bettina

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.3.8. Szállások kezelése (UD)

Felelős: Magyari Máté

Tartam:  3 nap

Erőforrásigény:  1 személynap

#### 8.3.9. Foglaláshoz szükséges adatok létrehozása az adatbázisban

Felelős: Nagy Ádám

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.3.10. Szállások kezeléséhez szükséges adatok létrehozása az adatbázisban

Felelős: Pernyész Bettina

Tartam:  5 nap

Erőforrásigény:  2 személynap

#### 8.3.11. Email-es kiértesítés új foglalás esetén az adott szállásadónak

Felelős: Nagy Ádám

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.3.12. Szállásadó értékelése (CR)

Felelős: Pernyész Bettina

Tartam:  5 nap

Erőforrásigény:  3 személynap

#### 8.3.13. Szállásadó értékelése (UD)

Felelős: Fekete Kristóf

Tartam:  5 nap

Erőforrásigény:  3 személynap

#### 8.3.14. Szállásfoglaló értékelése (CR)

Felelős: Péter Gergely

Tartam:  5 nap

Erőforrásigény:  3 személynap

#### 8.3.15. Szállásfoglaló értékelése (UD)

Felelős: Nagy Ádám

Tartam:  5 nap

Erőforrásigény:  3 személynap

#### 8.3.16. Tesztelési dokumentum az összes funkcióhoz (TP, TC)

Felelős: Péter Gergely

Tartam:  7 nap

Erőforrásigény:  1 személynap/fő


#### 8.3.17. A prototípus kitelepítése éles környezetbe 

Felelős: Magyari Máté

Tartam:  1 nap

Erőforrásigény:  1 személynap


### 8.4. Prototípus II. (4. mérföldkő)

Ennek a feladatnak az a célja, hogy az előző mérföldkő hiányzó funkcióit pótoljuk, illetve a hibásan működő funkciókat és az esetlegesen felmerülő új funkciókat megvalósítsuk. Továbbá az alkalmazás alapos tesztelése is a mérföldkőben történik az előző mérföldkőben összeállított tesztesetek alapján.

Részfeladatai a következők:

#### 8.4.1. Javított minőségű prototípus új funkciókkal

Felelős: Fekete Kristóf

Tartam:  5 nap

Erőforrásigény:  2.5 személynap

#### 8.4.2. Javított minőségű prototípus javított funkciókkal

Felelős: Nagy Ádám

Tartam:  5 nap

Erőforrásigény:  2 személynap

#### 8.4.3. Javított minőségű prototípus a korábbi hiányzó funkciókkal

Felelős: Péter Gergely

Tartam:  5 nap

Erőforrásigény:  1.5 személynap

#### 8.4.4. Felhasználói munkamenet tesztelése (TR)

Felelős: Fekete Kristóf

Tartam:  1 nap

Erőforrásigény:  1 személynap

#### 8.4.5. Foglalások kezelésének tesztelése (TR)

Felelős: Magyari Máté

Tartam:  1 nap

Erőforrásigény:  0.5 személynap

#### 8.4.6. Szállások kezelésének tesztelése (TR)


Felelős: Péter Gergely

Tartam:  1 nap

Erőforrásigény:  1 személynap

#### 8.4.7. Email-es funkciók tesztelése (TR)

Felelős: Nagy Ádám

Tartam:  1 nap

Erőforrásigény:  0.5 személynap


#### 8.4.8. Biztonsági mentés tesztelése (TR)

Felelős: Pernyész Bettina

Tartam:  1 nap

Erőforrásigény:  0.5 személynap

#### 8.4.9. A prototípus kitelepítésének frissítése

Felelős: Fekete Kristóf

Tartam:  1 nap

Erőforrásigény:  0.5 személynap


## 9. Részletes időbeosztás

[image](./Gantt-chart.png)


## 10. Projekt költségvetés

Az egyes leadások alkalmával rögzített erőforrásigényt, az elvállalt feladatok számát 
és az adott mérföldkőben végzett munkáért szerezhető pontszámot kell beírni minden emberre külön-külön.
Figyeljünk arra, hogy mivel mindenkinek minden mérföldkövön dolgoznia kell, ezért a 10.3-as táblázat
minden módosítható oszlopában legalább 1 pontnak szerepelni kell.

### 10.1. Részletes erőforrásigény (személynap)


| Név              |  M1 | M2  | M3 |     M4     | Összesen |
|------------------|-----|-----|----|------------|----------|
| Fekete Kristóf   |  1  |  2  | 6  |     4      |    13    |
| Magyari Máté     | 1.5 |  3  | 4  |    0,5     |    9     |
| Pernyész Bettina |  1  | 2.5 | 8  |    0.5     |    12    |
| Péter Gergely    |  1  |  1  | 7  |    2.5     |   11.5   |
| Nagy Ádám        |  1  | 0.5 | 7  |    2.5     |    11    |


### 10.2. Részletes feladatszámok

| Név              |  M1 | M2  | M3 |  M4  | Összesen |
|------------------|-----|-----|----|------|----------|
| Fekete Kristóf   |  1  |  1  |  3 |   3  |     8    |
| Magyari Máté     |  2  |  2  |  3 |   1  |     8    |
| Pernyész Bettina |  1  |  2  |  4 |   1  |     8    |
| Péter Gergely    |  1  |  1  |  4 |   2  |     8    |
| Nagy Ádám        |  1  |  1  |  3 |   2  |     7    |

### 10.3. Részletes költségvetés

| Név                                 | M1      | M2       | M3       | M4       | Összesen  |
|-------------------------------------|---------|----------|----------|----------|-----------|
| Maximálisan megszerezhető pontszám  |  (7)    | (20)     | (35)     |  (28)    | 100% (70) |
| Fekete Kristóf                      | 7     | 10     | 28     |  25    | 70        |
| Magyari Máté                        | 4     | 15     | 35     |  16    | 70        |
| Pernyész Bettina                    | 4     | 12     | 30     |  24    | 70        |
| Péter Gergely                       |    5     |      15    |    31      |    19      |   70        |
| Nagy Ádám                           |     6    |      13    |     28     |    23      |     70      |

Szeged, 2024-10-01.
