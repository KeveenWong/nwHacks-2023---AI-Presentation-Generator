
export default function parseText(query: string) {
    const text = query;

    const slides = [];
    let slide = {
        title: "",
        body: "",
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
                body: "",
                image: ""
            }
        } else if (line.startsWith("$Title")) {
            slide.title = line.slice(8);
        } else if (line.startsWith("$Body")) {
            slide.body = line.slice(7);
        }else if (line.startsWith("$Image")) {
            slide.image = line.slice(8);
        }
    }
    slides.push(slide);
    return slides;
}