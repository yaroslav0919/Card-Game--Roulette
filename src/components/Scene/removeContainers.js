import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { AnimatedSprite } from "pixi.js";

export const removeContainers = (app) => {
    let selected = [];
    let topMulti = [];
    let multis = [];

    app.stage.children.forEach((child) => {
        child.id === "select" && selected.push(child);
        child.id === "flame" && topMulti.push(child);
    });
    app.stage.children.forEach((child) => {
        child.id === "multi" && multis.push(child);
        child.id === "topmulti" && topMulti.push(child);
    });

    selected.forEach((e) => e.destroy());
    app.stage.removeChild(...selected);
    const easeCustom = CustomEase.create(
        "custom",
        "M0,0 C0.012,-0.234 0.574,-0.107 0.584,-0.014 0.646,0.586 0.78,1 1,1 "
    );

    gsap.to(multis, {
        alpha: 0,
        duration: 1,
        ease: easeCustom,
        onComplete: () => {
            app.stage.removeChild(multis);
        },
    });

    gsap.to(topMulti, {
        x: window.innerWidth / 2,
        duration: 0.5,
        delay: 1,
        ease: "none",
        onComplete: () => {
            gsap.to(topMulti, {
                alpha: 0,
                duration: 1,
                delay: 5,
                ease: "none",
                // onComplete: () => {
                //     topMulti.forEach((e) => {
                //         if (e instanceof AnimatedSprite) e.stop();
                //         e.destroy();
                //     });
                // app.stage.removeChild(topMulti);
                // },
            });
        },
    });
};

export const removeAllChildWithException = (container, exceptionIds) => {
    const deleteArray = [];
    container.children.forEach((e, i) => {
        let same = false;
        if (exceptionIds) {
            exceptionIds.every((eid) => {
                if (e.id === eid) {
                    same = true;
                    return false;
                }
                return true;
            });
        }
        if (!same) deleteArray.push(e);
    });
    deleteArray.forEach((e) => e.destroy());
    container.removeChild(...deleteArray);
};

export const removeChildsWithID = (container, deleteId) => {
    const deleteArray = [];
    container.children.forEach((e) => {
        if (e.id === deleteId) {
            deleteArray.push(e);
        }
    });
    deleteArray.forEach((e) => e.destroy());
    container.removeChild(...deleteArray);
};
