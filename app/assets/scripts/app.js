import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";

let mobileMenu = new MobileMenu();
let x = new RevealOnScroll($('.feature-item'), "85%");
let y = new RevealOnScroll($('.testimonial'), "70%");