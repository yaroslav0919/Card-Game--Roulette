import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

export const removeContainers = (app) => {
  let selected = [];
  let topMulti = [];
  app.stage.children.forEach((child) => {
    child.id === "select" && selected.push(child);
    child.id === "flame" && topMulti.push(child);
  });

  app.stage.removeChild(...selected);

  let multis = [];
  app.stage.children.forEach((child) => {
    child.id === "multi" && multis.push(child);
  });

  const count = multis.length;
  const easeCustom = CustomEase.create(
    "custom",
    "M0,0 C0.012,-0.234 0.574,-0.107 0.584,-0.014 0.646,0.586 0.78,1 1,1 "
  );

  topMulti.push(multis[count - 1]);
  multis.splice(count - 1);

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
        onComplete: () => {
          app.stage.removeChild(topMulti);
        },
      });
    },
  });
};
