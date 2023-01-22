
export default function parseText(query: string) {
    const text = query;

    const slides = [];
    let slide = {
        title: "",
        bulletPoints: [] as string[],
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
                image: ""
            }
        } else if (line.startsWith("$Title")) {
            slide.title = line.slice(8);
        } else if (line.startsWith("$Bullet Points")) {
            slide.bulletPoints.push(line.slice(16));
        }else if (line.startsWith("$Image")) {
            slide.image = line.slice(8);
        } else if (line.startsWith("-")) {
            slide.bulletPoints.push(line.slice(2));
        }
    }
    slides.push(slide);
    return slides;
}