
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-left` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-left?s=thin square-left}
 * @preview ![square-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNDE2Vjk2QzQ0OCA2MC42NTQgNDE5LjM0OCAzMiAzODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0OCA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlpNNjQgNDY0QzM3LjUzMyA0NjQgMTYgNDQyLjQ2NyAxNiA0MTZWOTZDMTYgNjkuNTMzIDM3LjUzMyA0OCA2NCA0OEgzODRDNDEwLjQ2NyA0OCA0MzIgNjkuNTMzIDQzMiA5NlY0MTZDNDMyIDQ0Mi40NjcgNDEwLjQ2NyA0NjQgMzg0IDQ2NEg2NFpNMjI0IDM0OC42ODRWMzA0SDMyOEMzNDEuMjU2IDMwNCAzNTIgMjkzLjI1NCAzNTIgMjgwVjIzMkMzNTIgMjE4Ljc0NiAzNDEuMjU2IDIwOCAzMjggMjA4SDIyNFYxNjMuMzE2QzIyNCAxNDEuOTM0IDE5OC4xNDggMTMxLjIyNyAxODMuMDI5IDE0Ni4zNDZMOTAuMzQ2IDIzOS4wMjlDODUuNjYgMjQzLjcxNyA4My4zMTYgMjQ5Ljg1NyA4My4zMTYgMjU2Uzg1LjY2IDI2OC4yODMgOTAuMzQ2IDI3Mi45NzFMMTgzLjAyOSAzNjUuNjU0QzE5OC4xNDggMzgwLjc3MyAyMjQgMzcwLjA2NiAyMjQgMzQ4LjY4NFpNMTk0LjM0NCAzNTQuMzRMMTAxLjY2IDI2MS42NTZDOTkuNjIxIDI1OS42MTcgOTkuMzE2IDI1Ny4yMzggOTkuMzE2IDI1NlM5OS42MjEgMjUyLjM4MyAxMDEuNjYgMjUwLjM0NEwxOTQuMzQ0IDE1Ny42NkMxOTcuNzU2IDE1NC4yNDggMjAxLjU3NiAxNTUuMzExIDIwMy4wNjIgMTU1LjkyNEMyMDQuNTQ3IDE1Ni41MzkgMjA4IDE1OC40OTIgMjA4IDE2My4zMTZWMjI0SDMyOEMzMzIuNDEyIDIyNCAzMzYgMjI3LjU4OCAzMzYgMjMyVjI4MEMzMzYgMjg0LjQxMiAzMzIuNDEyIDI4OCAzMjggMjg4SDIwOFYzNDguNjg0QzIwOCAzNTMuNTA4IDIwNC41NDcgMzU1LjQ2MSAyMDMuMDYyIDM1Ni4wNzZDMjAxLjU3NiAzNTYuNjg5IDE5Ny43NTYgMzU3Ljc1MiAxOTQuMzQ0IDM1NC4zNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 416V96C448 60.654 419.348 32 384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416ZM64 464C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416C432 442.467 410.467 464 384 464H64ZM224 348.684V304H328C341.256 304 352 293.254 352 280V232C352 218.746 341.256 208 328 208H224V163.316C224 141.934 198.148 131.227 183.029 146.346L90.346 239.029C85.66 243.717 83.316 249.857 83.316 256S85.66 268.283 90.346 272.971L183.029 365.654C198.148 380.773 224 370.066 224 348.684ZM194.344 354.34L101.66 261.656C99.621 259.617 99.316 257.238 99.316 256S99.621 252.383 101.66 250.344L194.344 157.66C197.756 154.248 201.576 155.311 203.062 155.924C204.547 156.539 208 158.492 208 163.316V224H328C332.412 224 336 227.588 336 232V280C336 284.412 332.412 288 328 288H208V348.684C208 353.508 204.547 355.461 203.062 356.076C201.576 356.689 197.756 357.752 194.344 354.34Z" />
        </Icon>
    </>
}