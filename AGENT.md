\# PHASE — PREMIUM VISUAL REDESIGN + REACT BITS POLISH



\## IMPORTANT



This is an EXISTING beauty salon website.



DO NOT rebuild the website from scratch.



DO NOT radically change:

\- section order

\- existing content architecture

\- routing

\- language system

\- functionality that already works



The goal is to preserve the current website while fixing the visual problems and adding carefully selected premium motion/UI effects.



Current problems that MUST be fixed:



1\. muddy green/brown color grading

2\. weak typography

3\. weak buttons

4\. hero has an empty/dark visual area instead of a beautiful image

5\. services are inconsistent because only one card has a photo

6\. gallery looks uneven and badly composed

7\. current site does not feel premium enough

8\. desktop/tablet/mobile must all be polished

9\. animations must enhance the design, not become the design



Reference mood:

https://bloomnails.com.ua/ua



Do NOT clone the reference.

Use it only for:

\- light premium atmosphere

\- elegance

\- beauty-industry presentation

\- cleaner colors

\- image-driven design

\- refined spacing

\- premium service presentation



\---



\# 1. GLOBAL ART DIRECTION

\## MODEL: SOL



Keep the current website structure but redesign its visual system.



Remove the muddy green/brown appearance.



New desired feeling:



\- premium

\- feminine

\- editorial

\- light

\- warm

\- elegant

\- expensive

\- calm

\- modern



Use a palette closer to:



\--background: #F7F3EE

\--background-soft: #EFE7DE

\--surface: #FFFDFC

\--surface-alt: #E8DDD2



\--text: #25211F

\--text-soft: #716862



\--accent: #B79A7E

\--accent-soft: #D8C6B7



\--dark: #2B2522



Optional:

very subtle dusty rose / warm champagne accents.



Avoid:



\- olive green

\- dirty brown

\- yellow-green

\- excessive dark overlays

\- heavy gold

\- pink Barbie aesthetic

\- random gradients



The site must feel clean and expensive.



\---



\# 2. TYPOGRAPHY REDESIGN

\## MODEL: SOL



Replace the current typography system.



Use:



HEADINGS:

an elegant high-end serif.



Possible direction:

\- Cormorant Garamond

\- DM Serif Display

\- Playfair Display

\- another refined editorial serif



BODY / UI:

clean premium sans serif.



Possible direction:

\- Manrope

\- Inter

\- Geist



Do not use too many fonts.



Maximum:

2 main font families.



Typography hierarchy:



hero headline:

large elegant serif



section titles:

serif



navigation/buttons:

clean sans-serif



body:

modern sans-serif



Improve:

\- line height

\- letter spacing

\- heading proportions

\- mobile sizes

\- readability



Do NOT make all text extremely thin.



\---



\# 3. HERO VISUAL — FIX THE EMPTY RIGHT SIDE

\## MODEL: SOL



Do not completely redesign the hero layout.



Preserve its current general left-text / right-visual composition.



Replace the current dark/empty shape on the right with an actual premium beauty image.



Preferred content:



\- elegant salon interior

OR

\- woman receiving a beauty treatment

OR

\- premium editorial beauty portrait

OR

\- close-up beauty / skincare composition



Image style must match the rest of the website:



\- ivory

\- cream

\- beige

\- champagne

\- natural skin tones

\- soft sunlight / studio light



Do NOT use a dark black rectangle.



\---



\# 4. HERO IMAGE COMPOSITION

\## MODEL: LUNA



The hero image should feel intentionally art-directed.



Possible shape:



large rounded arch / editorial rounded frame.



But do not use an exaggerated capsule.



Use:



\- elegant border radius

\- subtle frame

\- very subtle shadow

\- optional decorative outline slightly offset behind the image



Make the frame feel luxury/editorial.



\---



\# 5. HERO MOBILE ART DIRECTION

\## MODEL: SOL



Do not simply shrink the desktop hero.



Desktop:

text left

image right



Tablet:

keep a balanced two-column layout where possible.



Mobile:

headline first

image below or partially integrated below the CTA



Image should:

\- remain visible

\- preserve subject focus

\- not crop the face/hands badly

\- maintain reasonable height



Test:



320px

360px

375px

390px

430px



\---



\# 6. SHINYTEXT INTEGRATION

\## MODEL: LUNA



Integrate the provided React Bits:



ShinyText



Dependency:

motion



Do NOT use ShinyText for huge paragraphs or every title.



Use it only on small premium accent text.



Recommended placements:



OPTION 1:

hero eyebrow text



Example:



"ПРОСТІР КРАСИ ТА ТУРБОТИ"



OPTION 2:

small final CTA label



OPTION 3:

small service category label



Preferred configuration:



speed:

approximately 3.5–5 seconds



delay:

approximately 1–2 seconds



color:

a muted taupe/champagne tone



shineColor:

warm ivory / soft white



spread:

approximately 100–130



yoyo:

false



pauseOnHover:

false



The effect should look like light reflecting across satin/metallic typography.



It must NOT look:

\- chrome

\- neon

\- gaming

\- flashy



Never put ShinyText on every heading.



\---



\# 7. BUTTON SYSTEM REDESIGN

\## MODEL: SOL



Completely improve the current buttons while keeping their existing actions.



Create three button styles:



PRIMARY



warm dark / graphite button

light text

premium padding

subtle border

smooth hover



SECONDARY



transparent or light surface

thin premium border

dark text



TEXT LINK



text + small arrow

animated underline or arrow movement



Button behavior:



hover:

translateY(-2px)



optional:

very subtle highlight sweep



arrow:

move 3–4px



transition:

approximately 250–350ms



Avoid:



\- huge pill buttons

\- neon glow

\- overly rounded buttons

\- dramatic magnetic movement



Buttons must look premium and tactile.



\---



\# 8. OPTIONAL SHINY BUTTON DETAIL

\## MODEL: LUNA



You MAY reuse the ShinyText visual principle on ONE main CTA.



Do not literally animate the entire button label excessively.



Alternative:

add a soft highlight sweep across the button background.



Main CTA:



"Записатися на візит"



The effect should happen occasionally, not continuously at high speed.



\---



\# 9. SERVICES — FIX THE INCONSISTENT CARDS

\## MODEL: SOL



Current problem:



Only manicure has a large image.

Other cards feel empty.



Fix this.



Every main service must include its own image.



Main categories:



01

Манікюр і педикюр



02

Брови та вії



03

Догляд за обличчям



04

Волосся та макіяж



Each card must include:



\- image

\- category number

\- service title

\- short description

\- starting price

\- small arrow/button



Use the SAME visual system for every card.



Do not make one card completely different from the others unless intentionally used as a controlled featured card.



\---



\# 10. SERVICES LAYOUT

\## MODEL: SOL



Preferred desktop layout:



4 balanced service cards



OR



2 × 2 editorial grid



OR



one featured card + three cards only if dimensions remain visually balanced.



Current inconsistent empty-card design must be removed.



Images should occupy approximately:

40–55% of card height.



Text:

remaining area.



Make all cards feel premium and complete.



\---



\# 11. SERVICE CARD MICROINTERACTION

\## MODEL: LUNA



Use subtle premium interaction.



On desktop hover:



\- image scale 1 → 1.025

\- card translateY 0 → -4px

\- arrow moves slightly

\- border becomes more visible

\- optional soft highlight



Do NOT add:



\- excessive tilt

\- large scale

\- strong glow

\- 3D flipping



Mobile:

no hover-dependent information.



\---



\# 12. SCROLLSTACK — OPTIONAL SERVICES EXPERIENCE

\## MODEL: ASTRA MEDIUM



The supplied React Bits ScrollStack component may be used.



Dependency:

lenis.



IMPORTANT:



Do NOT automatically use it.



First compare:



A.

normal premium 2×2 / 4-card services grid



vs.



B.

ScrollStack services presentation.



Use ScrollStack ONLY if option B genuinely improves the site.



Possible use:



as the user scrolls through:



01 Манікюр

02 Брови

03 Догляд

04 Волосся



cards gently stack.



Settings must be restrained:



rotationAmount:

0



blurAmount:

0 or extremely small



itemScale:

small



Use window scrolling only if it does not interfere with normal site navigation.



Avoid creating a nested scroll area.



VERY IMPORTANT:



Do not allow ScrollStack to break:

\- anchor navigation

\- mobile scrolling

\- sticky header

\- touch behavior



\---



\# 13. SCROLLSTACK MOBILE FALLBACK

\## MODEL: SOL



On mobile / lower-performance devices:



prefer normal stacked cards.



Do not force complicated pinned scroll behavior on phones.



Possible breakpoint:



below 768px:

render normal service cards.



No scroll hijacking.



No nested vertical scroll container.



Touch scrolling must remain native and predictable.



\---



\# 14. DITHERVEIL — OPTIONAL PREMIUM INTERACTIVE IMAGE

\## MODEL: ASTRA MEDIUM



Integrate the provided React Bits:



DitherVeil



Dependency:

ogl



This is an OPTIONAL enhancement.



Do NOT use it as the general background of the entire website.



Best possible placement:



ONE editorial image section between major sections.



Possible concept:



headline:

"Краса розкривається в деталях"



Use a premium portrait / salon image.



The image starts as an elegant subtle duotone texture and reveals the original beauty image under the cursor.



This can become one memorable interactive moment on desktop.



\---



\# 15. DITHERVEIL VISUAL SETTINGS

\## MODEL: ASTRA MEDIUM



Adapt DitherVeil to the new salon palette.



Do NOT keep dark purple/default demo colors.



Suggested:



inkColor:

\#C9B8AA



paperColor:

\#F7F3EE



rimColor:

\#FFFFFF



pattern:

floyd

OR

atkinson



pixelSize:

2–3 desktop



levels:

2–3



revealRadius:

approximately 160–220 desktop



softness:

0.7–0.9



linger:

0.7–1.2



rim:

0 or extremely subtle



clickBurst:

false unless visually exceptional



wander:

false



The effect should feel artistic/editorial.



Not retro-computer.



\---



\# 16. DITHERVEIL MOBILE BEHAVIOR

\## MODEL: SOL



DitherVeil must NOT hurt mobile performance.



On tablets/phones:



Option A — recommended:

replace it with the normal static image.



OR



Option B:

use an extremely simplified version only if performance remains excellent.



Do not require hover interaction on touch devices.



For prefers-reduced-motion:



use static image or simplified state.



\---



\# 17. OPTIONAL 3D ELEMENT

\## MODEL: ASTRA MEDIUM



If the project already contains the additional supplied 3D model/component mentioned for this website:



inspect it first.



Do NOT blindly add it.



Determine:



\- library

\- model weight

\- texture weight

\- runtime cost

\- visual quality

\- mobile performance

\- whether it actually fits the salon aesthetic



If it looks appropriate, adapt it into ONE subtle premium decorative element.



Best placement:



hero image area

OR

section divider

OR

final CTA



Potential beauty-related 3D presentation:



\- perfume / cosmetics-like glass object

\- pearl

\- abstract smooth sculptural shape

\- metallic/champagne beauty object

\- flowing glass form



Do NOT use a random technical 3D object.



\---



\# 18. 3D STYLE

\## MODEL: ASTRA MEDIUM



If using the 3D element, change its styling to match:



\- pearl

\- ivory

\- champagne

\- frosted glass

\- subtle rose tone



Lighting:



soft studio lighting



Movement:



VERY slow rotation / floating.



Amplitude must be small.



No aggressive mouse tracking.



Do not allow it to dominate the hero.



\---



\# 19. 3D MOBILE OPTIMIZATION

\## MODEL: SOL



On mobile:



do not run heavy 3D if unnecessary.



Possible strategy:



desktop:

interactive / animated 3D



tablet:

simplified animation



mobile:

static rendered fallback image



Use a loading strategy so 3D is not required for initial page render.



Lazy-load it if possible.



Do not block Largest Contentful Paint.



\---



\# 20. GALLERY — REBUILD THE CURRENT BAD GRID

\## MODEL: SOL



The current "Краса у деталях" section is visually unbalanced.



Rebuild ONLY this section.



Do not alter unrelated sections.



Preferred direction:



clean editorial grid.



Desktop example:



COLUMN 1:

large portrait

medium treatment



COLUMN 2:

medium manicure

large beauty portrait



COLUMN 3:

medium salon interior

large hair image



But all columns must align visually.



Use a consistent grid system.



\---



\# 21. GALLERY GRID RULES

\## MODEL: SOL



Use CSS Grid.



Avoid random Masonry heights unless they form a deliberate pattern.



Preferred:



12-column grid



Images can span:



6

4

8

etc.



But rows must have a deliberate rhythm.



Use:



consistent gaps

consistent image radius

consistent overlays

consistent labels



Desktop gaps:

approximately 16–24px.



Do not create accidental empty areas.



\---



\# 22. GALLERY IMAGE RATIOS

\## MODEL: LUNA



Limit the number of aspect ratios.



Use approximately:



portrait:

4:5



landscape:

4:3



wide:

16:9



Do NOT use six random aspect ratios.



Use object-fit: cover.



Carefully set object-position to avoid bad face/hair crops.



\---



\# 23. GALLERY ANIMATION

\## MODEL: LUNA



On scroll:



opacity 0 → 1

translateY 20px → 0



Small stagger.



Hover:



image scale max 1.025.



Overlay:

very subtle gradient.



Label:

bottom-left.



Optional arrow:

bottom-right.



Do NOT animate the entire grid around wildly.



\---



\# 24. ANIMATED BACKGROUND

\## MODEL: ASTRA MEDIUM



Add ONLY ONE main animated ambient background to the website.



Recommended placement:



hero background

OR

final CTA.



Do not use heavy WebGL everywhere.



Effect should resemble:



soft champagne light

passing through glass / silk.



Possible implementation:



\- Motion animated radial gradients

\- React Bits Soft Aurora

\- another extremely subtle existing effect



Do NOT use:

\- galaxy

\- stars

\- hyperspeed

\- particles

\- strong wave distortion

\- neon



\---



\# 25. BACKGROUND PERFORMANCE

\## MODEL: SOL



Animate only:



transform

opacity

background-position where appropriate.



Do not create enormous expensive blur layers on mobile.



Mobile:



use fewer layers

lower blur

less motion



prefers-reduced-motion:



static composition.



\---



\# 26. SECTION TRANSITIONS

\## MODEL: LUNA



Improve visual rhythm between sections.



Use alternating surfaces:



ivory

soft beige

white

occasional dark graphite accent section



Do NOT make every section identical brown.



Use subtle separators such as:



\- thin lines

\- spacing

\- editorial labels

\- small typographic details



Do not add random decorative icons everywhere.



\---



\# 27. IMAGE ART DIRECTION

\## MODEL: SOL



Review all current images.



Keep strong images.



Replace weak ones.



All images should feel like the same brand shoot.



Target visual style:



\- cream

\- ivory

\- natural skin

\- salon interiors

\- champagne accents

\- warm daylight

\- soft highlights

\- clean makeup

\- manicure closeups

\- healthy hair



Avoid obvious AI artifacts.



Avoid inconsistent color temperatures.



\---



\# 28. HEADER

\## MODEL: LUNA



Improve current header without changing its basic structure.



Keep:



logo left

navigation center/right

booking CTA



Improve:



\- spacing

\- typography

\- button

\- transparency

\- sticky transition



At hero top:



light transparent header.



After scroll:



slightly blurred ivory / translucent surface.



Use subtle border-bottom.



\---



\# 29. LOGO

\## MODEL: LUNA



Preserve Lumière branding unless there is a strong reason to refine it.



Improve the logo lockup:



"Lumière"

\+

small "BEAUTY STUDIO"



Avoid a huge decorative sparkle.



One small refined symbol is acceptable.



Make the logo look like a legitimate beauty brand.



\---



\# 30. PRICE PRESENTATION

\## MODEL: SOL



Improve service pricing typography.



Current prices should not look like plain technical text.



Use:



small prefix:

"від"



larger numeric price



currency:

"₴"



Example:



від

650 ₴



Maintain fictional/demo pricing.



Do not invent misleading real business claims.



\---



\# 31. MOBILE RESPONSIVE AUDIT

\## MODEL: SOL



Test ALL redesigned components at:



320

360

375

390

430

768

1024

1280

1440

1920



Check:



\- hero

\- image cropping

\- logo

\- navigation

\- menu

\- ShinyText

\- service cards

\- ScrollStack fallback

\- DitherVeil fallback

\- 3D fallback

\- gallery

\- buttons

\- typography

\- pricing

\- contact form

\- footer



There must be:



NO horizontal overflow.



NO tiny text.



NO clipped headings.



NO broken cards.



NO overlapping animations.



\---



\# 32. TOUCH DEVICES

\## MODEL: SOL



Never depend on hover for critical actions.



For touch devices:



\- cards are immediately understandable

\- CTAs remain visible

\- image labels remain readable

\- interactive WebGL is optional

\- no cursor-specific instructions



Disable mouse-only interactions.



\---



\# 33. PERFORMANCE AUDIT

\## MODEL: SOL



After all visual changes:



inspect bundle/runtime cost.



Pay special attention to:



motion

ogl

lenis

any 3D library

large images



Do not initialize heavy effects globally.



Lazy-load optional premium effects when practical.



Pause animation when section is off-screen.



Use responsive images.



Compress large images.



Avoid unnecessary 4K assets.



\---



\# 34. WEBGL LIMIT

\## MODEL: SOL



Maximum:



ONE active WebGL-based visual experience in the visible viewport.



If DitherVeil and 3D both use GPU-heavy rendering:



do not allow both to run constantly.



Prefer:



one active

one lazy/static fallback.



Site usability comes first.



\---



\# 35. REDUCED MOTION

\## MODEL: SOL



Respect:



prefers-reduced-motion: reduce



When active:



\- disable shiny looping where appropriate

\- replace WebGL animation with static image

\- disable parallax

\- disable ScrollStack stacking

\- simplify entrance transitions

\- stop 3D motion



The site must still look premium.



\---



\# 36. DO NOT OVER-ANIMATE

\## MODEL: SOL



Use this rule:



one visual hero moment

one interactive image moment

one service/card interaction system

one text accent animation



That is enough.



Avoid turning the site into React Bits documentation.



React Bits components must feel native to the design.



\---



\# 37. KEEP EXISTING FUNCTIONALITY

\## MODEL: SOL



Do NOT break:



\- navigation

\- language switching

\- forms

\- links

\- existing routes

\- contacts

\- gallery interactions

\- responsive menu



Preserve existing functionality while improving visuals.



\---



\# 38. FINAL VISUAL CHECK

\## MODEL: SOL



After implementation compare the new version against the previous screenshots.



Confirm the following are fixed:



\[ ] muddy green/brown palette is gone



\[ ] hero right side has a real high-quality image



\[ ] buttons look premium



\[ ] typography looks premium



\[ ] every main service has imagery



\[ ] service cards are consistent



\[ ] gallery is balanced and intentional



\[ ] animations are subtle



\[ ] site still feels like the existing Lumière project



\[ ] desktop is polished



\[ ] tablet is polished



\[ ] phone layout is polished



\---



\# 39. TECHNICAL CHECK

\## MODEL: SOL



Run:



npm run build



If available:



npm run lint



Check browser console.



Fix:



\- runtime errors

\- hydration issues

\- missing imports

\- missing images

\- animation warnings

\- WebGL errors

\- horizontal overflow



\---



\# 40. IMPORTANT — DO NOT CLEAN THE REPOSITORY YET

\## MODEL: SOL



Do not delete AGENTS.md yet.



Do not perform final repository cleanup.



We will visually review the new design first.



At the end report:



1\. color system changes

2\. typography changes

3\. hero changes

4\. service card changes

5\. gallery changes

6\. ShinyText usage

7\. whether ScrollStack was used or rejected and why

8\. whether DitherVeil was used or rejected and why

9\. whether the 3D component was used or rejected and why

10\. mobile fallbacks

11\. performance optimizations

12\. build result
# PHASE — PREMIUM COLOR SYSTEM + CINEMATIC SCROLL HERO



\## Main goal



Improve the existing Lumière Beauty Studio demo website.



Do NOT rebuild the website from scratch.



Preserve:

\- current project structure

\- existing sections that already work

\- routing

\- language system

\- contact/forms functionality

\- overall beauty salon concept



Only improve:

\- color palette

\- backgrounds

\- hero experience

\- motion

\- typography polish

\- visual consistency

\- mobile responsiveness

\- performance



The site should feel like a real premium beauty studio website, not like an AI-generated concept or component showcase.



\---



\# 1. NEW COLOR SYSTEM

\## MODEL: SOL



Replace the current muddy / brown-heavy / flat-white color system.



Create a soft premium beauty palette.



Use approximately:



\--bg-main: #F7F2ED

\--bg-soft: #EFE5DC

\--bg-warm: #E6D7CB

\--surface: #FFFDFC



\--text-main: #2C2421

\--text-soft: #756963

\--text-light: #9D8E86



\--accent: #B78F7A

\--accent-soft: #DCC4B7

\--accent-light: #EADCD3



\--button-dark: #342823

\--button-dark-hover: #44342E



\--line: rgba(70, 52, 45, 0.15)



Direction:



\- ivory

\- warm milk

\- champagne

\- nude

\- dusty rose

\- soft taupe

\- espresso



Avoid:

\- olive

\- dirty green

\- muddy brown

\- strong yellow

\- neon

\- excessive gold



The website should feel warmer, softer and more luxurious.



\---



\# 2. SECTION BACKGROUNDS

\## MODEL: LUNA



Do not use plain white for every section.



Create visual rhythm using several related surfaces.



Suggested alternation:



hero:

warm ivory + animated light



services:

soft beige



premium feature:

light nude / champagne



prices:

warm cream



contact:

dark espresso or soft rose-taupe



footer:

deep warm brown / graphite



Use subtle section transitions.



No hard random color changes.



\---



\# 3. HERO — CINEMATIC SCROLL EXPERIENCE

\## MODEL: ASTRA MEDIUM



This is the main visual upgrade.



Keep the general hero layout:

\- text on the left

\- female beauty image on the right



But create a scroll-driven visual transformation.



Desired concept:



INITIAL STATE:

the woman is looking slightly away from the viewer.



AS THE USER SCROLLS DOWN:

she gradually turns toward the viewer.



FINAL STATE:

she is looking toward the camera / viewer.



The transition MUST feel:

\- smooth

\- cinematic

\- premium

\- natural

\- slow enough to notice

\- not gimmicky



\---



\# 4. HOW TO IMPLEMENT THE FACE TURN

\## MODEL: ASTRA MEDIUM



Do NOT attempt to distort a single flat image into an unrealistic rotating head.



Preferred implementation methods, in order:



\### OPTION A — multi-frame sequence

BEST OPTION if appropriate assets exist.



Use approximately:

4–8 matching frames of the same woman.



Frames should progress naturally:



1\. looking away

2\. slight turn

3\. halfway

4\. almost facing viewer

5\. facing viewer



Map scroll progress to frame progression.



Use interpolation / crossfade between frames so the transition does not look like frame switching.



\---



\### OPTION B — 2-image cinematic crossfade

If only two suitable images exist:



Image A:

woman looking away



Image B:

same or visually matching woman facing camera



Animate with:

\- opacity crossfade

\- small scale change

\- small translate shift

\- slight blur transition

\- lighting adjustment



The result should create the illusion of movement without obviously switching images.



\---



\### OPTION C — short scroll-controlled video

If a high-quality suitable video asset exists:



use a short video or image sequence controlled by scroll progress.



Only use this if:

\- quality is high

\- mobile performance remains good

\- loading remains acceptable



Do not autoplay a large heavy video unnecessarily.



\---



\# 5. HERO SCROLL MAPPING

\## MODEL: ASTRA MEDIUM



Tie the visual transition to approximately the first:



40–70vh



of scroll after the hero begins.



Do not make the user scroll through several full screens just to complete the animation.



Suggested progression:



0%:

woman looking away



20%:

slight movement



40%:

mid-turn



70%:

almost facing user



100%:

facing camera



Use smooth interpolation.



No snapping.



No aggressive springs.



\---



\# 6. HERO IMAGE POSITIONING

\## MODEL: SOL



The subject must remain correctly framed.



Desktop:

woman occupies right 42–50% of hero.



Text:

left side.



Do not cover:

\- face

\- eyes

\- hands

\- important beauty details



Use art-directed object-position.



Image should be large enough to feel premium.



Avoid making it look like a small card.



\---



\# 7. HERO TEXT MOTION

\## MODEL: LUNA



Animate the hero text independently but subtly.



Sequence:



small eyebrow:

fade + slight translate



main heading:

line-by-line reveal



description:

soft fade-up



buttons:

small stagger



Animation duration:

approximately 600–1000ms



No bounce.

No strong spring.

No letter explosion.



\---



\# 8. HERO BACKGROUND ANIMATION

\## MODEL: ASTRA MEDIUM



Add ONE subtle animated ambient background.



Desired feeling:



soft light moving through:

\- silk

\- frosted glass

\- perfume bottle reflections

\- beauty studio lighting



Possible implementation:



\- Motion animated radial gradients

\- soft mesh gradient

\- React Bits Soft Aurora

\- subtle custom light sweep



Colors:

\- ivory

\- nude

\- dusty rose

\- champagne



Opacity must be low.



Do not use:

\- stars

\- particles

\- cosmic backgrounds

\- neon waves

\- gaming effects



\---



\# 9. SHINYTEXT

\## MODEL: LUNA



Integrate the existing React Bits ShinyText component if it fits naturally.



Use it ONLY for small accent text.



Recommended:



"ПРОСТІР КРАСИ ТА ТУРБОТИ"



or another eyebrow label.



Suggested settings:



speed={4}

delay={1.5}

color="#9D8E86"

shineColor="#FFF8F3"

spread={115}

direction="left"

yoyo={false}

pauseOnHover={false}



Do not use ShinyText on the large hero headline.



Large serif heading must remain clean.



\---



\# 10. TYPOGRAPHY POLISH

\## MODEL: SOL



Use a premium but readable type system.



Recommended:



HEADINGS:

Cormorant Garamond

OR

DM Serif Display

OR

another refined serif



BODY/UI:

Manrope

OR

Inter

OR

Geist



Do not use overly decorative hard-to-read fonts.



Improve:



\- line height

\- max width

\- responsive font sizing

\- spacing

\- weight hierarchy



Hero heading must remain large and elegant but readable.



\---



\# 11. REMOVE AI-LOOKING DECORATION

\## MODEL: LUNA



Remove unnecessary decorative elements such as:



\- sparkles

\- stars

\- random arrows

\- floating circles

\- meaningless badges

\- decorative numbers

\- random glows

\- fake futuristic shapes



Do not add these back during the redesign.



The visual interest should come from:



\- photography

\- typography

\- layout

\- color

\- motion

\- spacing



\---



\# 12. BUTTON MOTION

\## MODEL: LUNA



Improve buttons using subtle motion.



Primary CTA:

"Записатися на візит"



Hover:



\- translateY(-2px)

\- subtle shadow increase

\- background light shift

\- optional soft highlight sweep



Secondary CTA:



\- thin border

\- slight fill on hover

\- no arrow required



Do not use unnecessary arrow icons if they do not improve clarity.



\---



\# 13. SECTION REVEALS

\## MODEL: LUNA



Add consistent section reveal animations.



Use:



opacity

translateY

very slight blur



Suggested:



initial:

opacity: 0

y: 24

blur: 4px



visible:

opacity: 1

y: 0

blur: 0



Use small stagger for groups.



Do not animate every sentence.



\---



\# 14. SERVICE CARDS

\## MODEL: LUNA



Use subtle motion only.



On scroll:

stagger reveal.



On hover:

\- image scale max 1.025

\- card lift 3–4px

\- subtle shadow

\- slightly stronger border



Do not add:

\- strong tilt

\- neon

\- sparkle

\- arrow flying across card



\---



\# 15. IMAGE REVEAL EFFECT

\## MODEL: ASTRA MEDIUM



For ONE selected image section, consider a premium image reveal.



Possible effect:



as section enters viewport:

image is slightly masked / blurred

then reveals smoothly from bottom or side.



Alternative:

use the supplied DitherVeil ONLY if it genuinely fits the luxury style.



If DitherVeil is used:

\- use it once

\- desktop only if needed

\- adapt colors to ivory / taupe / champagne

\- no retro-computer look

\- no clickBurst

\- no aggressive pixelation



If it looks gimmicky:

do not use it.



\---



\# 16. SMOOTH SCROLL

\## MODEL: SOL



If Lenis already exists in the project, use it carefully.



Do not install or initialize multiple smooth-scroll systems.



Smooth scroll should remain subtle.



Do not make scrolling feel delayed or heavy.



Mobile touch scrolling should remain natural.



\---



\# 17. OPTIONAL SCROLLSTACK

\## MODEL: ASTRA MEDIUM



Do NOT automatically add ScrollStack.



Use it only if one section clearly benefits.



Possible section:

services

or

beauty rituals



Maximum:

one ScrollStack section.



Settings:

\- rotationAmount: 0

\- blurAmount: 0

\- small itemScale

\- subtle stacking



Do not use nested scrolling.



Below 768px:

replace with normal vertical cards.



\---



\# 18. BACKGROUND DETAILS

\## MODEL: LUNA



Add very subtle decorative background details without obvious icons.



Good:

\- grain texture

\- soft radial gradient

\- faint light stripe

\- blurred warm color field

\- subtle editorial lines



Bad:

\- stars

\- diamonds

\- sparkles

\- dots floating everywhere

\- tech grids

\- random blobs



\---



\# 19. MOBILE HERO

\## MODEL: SOL



The hero animation must degrade gracefully on mobile.



Desktop:

full scroll-controlled transformation.



Tablet:

simplified transformation.



Mobile:

use either:

\- two-state crossfade

OR

\- static final image

OR

\- lightweight 2–3 frame transition



Do not load a heavy 8-frame sequence on low-end phones unless optimized.



No visible lag.



No horizontal overflow.



\---



\# 20. IMAGE OPTIMIZATION

\## MODEL: SOL



Optimize all new image assets.



Use:

\- WebP / AVIF where appropriate

\- responsive sizes

\- lazy loading outside hero

\- preload only critical hero image

\- avoid large 4K assets



If using frame sequence:

optimize every frame aggressively.



Target:

smooth animation without excessive bandwidth.



\---



\# 21. PERFORMANCE SAFEGUARD

\## MODEL: SOL



Do not run multiple expensive effects simultaneously.



At any moment:

maximum one major heavy animated visual.



Pause animation when offscreen.



Respect:



prefers-reduced-motion



Reduced motion mode:



\- static hero image

\- no scroll-based face-turn

\- no parallax

\- simple fades only



\---



\# 22. DESKTOP RESPONSIVE TEST

\## MODEL: SOL



Check:



1280

1366

1440

1600

1920



Ensure:

\- hero remains balanced

\- image does not become too large

\- heading does not break badly

\- background animation remains subtle

\- CTA stays visible



\---



\# 23. TABLET TEST

\## MODEL: SOL



Check:



768

820

1024



Ensure:

\- image remains properly cropped

\- hero content fits without overlap

\- navigation remains usable

\- animation does not stutter

\- text remains readable



\---



\# 24. MOBILE TEST

\## MODEL: SOL



Check:



320

360

375

390

430



Ensure:



\- no overflow

\- no clipped text

\- no broken hero

\- buttons are large enough

\- animation does not lag

\- image crop is flattering

\- navbar works

\- section spacing is consistent



\---



\# 25. FINAL VISUAL TARGET

\## MODEL: SOL



The website should feel like:



premium beauty campaign

\+

boutique salon

\+

editorial fashion website



NOT:



AI template

startup landing page

crypto site

component demo



The strongest visual moment should be:



the woman subtly turning toward the viewer as the user begins to scroll.



Everything else should support that moment rather than compete with it.



\---



\# 26. FINAL QA

\## MODEL: SOL



After implementation:



run:



npm run build



If available:



npm run lint



Check console.



Verify:



\- hero scroll animation

\- mobile fallback

\- language switcher

\- buttons

\- forms

\- navigation

\- images

\- section reveals

\- reduced motion

\- performance



Fix every visible issue.



\---



\# 27. DO NOT CLEANUP YET

\## MODEL: SOL



Do NOT delete AGENTS.md yet.



Do NOT perform AI/development cleanup yet.



First provide the finished visual version for review.



At the end report:



1\. new color palette

2\. hero implementation method

3\. number of hero frames/images used

4\. background effect used

5\. ShinyText usage

6\. other animations added

7\. mobile fallback

8\. image optimization performed

9\. build result

10\. anything that still needs manual visual review

