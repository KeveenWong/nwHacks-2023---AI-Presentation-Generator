
export default function parseText(query: string) {
const text = query;

const slides = [];
let slide = {
    title: "",
    bulletPoints: [] as string[],
    script: "",
    image: ""
};

const lines = text.split("\n");

for (let line of lines) {
    if (line.startsWith("Slide")) {
        if (slide.title !== "") {
            slides.push(slide);
        }
        slide = {
            title: "",
            bulletPoints: [],
            script: "",
            image: ""
        }
    } else if (line.startsWith("Title")) {
        slide.title = line.slice(7);
    } else if (line.startsWith("Bullet Points")) {
        slide.bulletPoints.push(line.slice(15));
    } else if (line.startsWith("Script")) {
        slide.script = line.slice(7);
    } else if (line.startsWith("Image")) {
        slide.image = line.slice(7);
    } else if (line.startsWith("-")) {
        slide.bulletPoints.push(line.slice(2));
    }
}
slides.push(slide);
console.log(JSON.stringify(slides,null,4));

}