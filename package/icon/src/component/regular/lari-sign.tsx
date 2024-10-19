
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lari-sign` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lari-sign?s=regular lari-sign}
 * @preview ![lari-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNDU2QzM4NCA0NjkuMjUgMzczLjI1IDQ4MCAzNjAgNDgwSDI0QzEwLjc1IDQ4MCAwIDQ2OS4yNSAwIDQ1NlMxMC43NSA0MzIgMjQgNDMySDY1LjQyNEMyNS40MTQgMzk2Ljc4OSAwIDM0NS4zNjUgMCAyODhDMCAyMDcuNTk0IDQ5LjcyNyAxMzguNjg2IDEyMCAxMTAuMTM1VjU2QzEyMCA0Mi43NSAxMzAuNzUgMzIgMTQ0IDMyUzE2OCA0Mi43NSAxNjggNTZWOTcuNjY2QzE3NS44ODEgOTYuNjc4IDE4My44NTUgOTYgMTkyIDk2QzIwMC4xNjIgOTYgMjA4LjA3IDk3LjExNyAyMTYgOTguMTIxVjU2QzIxNiA0Mi43NSAyMjYuNzUgMzIgMjQwIDMyUzI2NCA0Mi43NSAyNjQgNTZWMTEwLjUyNUMzMjIuNzMyIDEzNC40MjIgMzY3Ljk1MSAxODYuMjY0IDM4MC41MTYgMjUxLjQ2OUMzODMuMDMxIDI2NC40NjkgMzc0LjUxNiAyNzcuMDYzIDM2MS41IDI3OS41NjNDMzQ4LjYwOSAyODIuMjE5IDMzNS44NzUgMjczLjU5NCAzMzMuMzkxIDI2MC41MzFDMzI1LjI3OSAyMTguNSAyOTkuMTYyIDE4My42ODIgMjY0IDE2My4zNTRWMjY0QzI2NCAyNzcuMjUgMjUzLjI1IDI4OCAyNDAgMjg4UzIxNiAyNzcuMjUgMjE2IDI2NFYxNDYuMTIxQzIwOC4xNjQgMTQ0Ljc5NyAyMDAuMTYyIDE0NCAxOTIgMTQ0QzE4My43ODEgMTQ0IDE3NS44NDYgMTQ1LjA5OCAxNjggMTQ2LjQyNlYyNjRDMTY4IDI3Ny4yNSAxNTcuMjUgMjg4IDE0NCAyODhTMTIwIDI3Ny4yNSAxMjAgMjY0VjE2NC4wMjlDNzcuMTcgMTg5LjAxIDQ4IDIzNC45MzkgNDggMjg4QzQ4IDM2Ny40MDYgMTEyLjU5NCA0MzIgMTkyIDQzMkgzNjBDMzczLjI1IDQzMiAzODQgNDQyLjc1IDM4NCA0NTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LariSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 456C384 469.25 373.25 480 360 480H24C10.75 480 0 469.25 0 456S10.75 432 24 432H65.424C25.414 396.789 0 345.365 0 288C0 207.594 49.727 138.686 120 110.135V56C120 42.75 130.75 32 144 32S168 42.75 168 56V97.666C175.881 96.678 183.855 96 192 96C200.162 96 208.07 97.117 216 98.121V56C216 42.75 226.75 32 240 32S264 42.75 264 56V110.525C322.732 134.422 367.951 186.264 380.516 251.469C383.031 264.469 374.516 277.063 361.5 279.563C348.609 282.219 335.875 273.594 333.391 260.531C325.279 218.5 299.162 183.682 264 163.354V264C264 277.25 253.25 288 240 288S216 277.25 216 264V146.121C208.164 144.797 200.162 144 192 144C183.781 144 175.846 145.098 168 146.426V264C168 277.25 157.25 288 144 288S120 277.25 120 264V164.029C77.17 189.01 48 234.939 48 288C48 367.406 112.594 432 192 432H360C373.25 432 384 442.75 384 456Z" />
        </Icon>
    </>
}