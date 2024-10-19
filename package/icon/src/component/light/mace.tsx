
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mace` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mace?s=light mace}
 * @preview ![mace](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDguNjg4IDM0MC42ODhMNC42ODggNDg0LjY4OEMtMS41NjMgNDkwLjkzOCAtMS41NjMgNTAxLjA2MyA0LjY4OCA1MDcuMzEyQzcuODEyIDUxMC40MzggMTEuOTA2IDUxMiAxNiA1MTJTMjQuMTg3IDUxMC40MzggMjcuMzEyIDUwNy4zMTJMMTcxLjMxMiAzNjMuMzEyQzE3Ny41NjIgMzU3LjA2MiAxNzcuNTYyIDM0Ni45MzcgMTcxLjMxMiAzNDAuNjg4UzE1NC45MzggMzM0LjQzOCAxNDguNjg4IDM0MC42ODhaTTQ5NiAyMDhINDMwLjM4N0M0MjIuOTI4IDE0MS40MjYgMzcwLjU3NCA4OS4wNyAzMDQgODEuNjEzVjE2QzMwNCA3LjE1NiAyOTYuODQ0IDAgMjg4IDBTMjcyIDcuMTU2IDI3MiAxNlY4MS42MTNDMjA1LjQyNiA4OS4wNyAxNTMuMDcyIDE0MS40MjYgMTQ1LjYxMyAyMDhIODBDNzEuMTU2IDIwOCA2NCAyMTUuMTU2IDY0IDIyNFM3MS4xNTYgMjQwIDgwIDI0MEgxNDUuNjEzQzE1My4wNzIgMzA2LjU3NCAyMDUuNDI2IDM1OC45MyAyNzIgMzY2LjM4N1Y0MzJDMjcyIDQ0MC44NDQgMjc5LjE1NiA0NDggMjg4IDQ0OFMzMDQgNDQwLjg0NCAzMDQgNDMyVjM2Ni4zODdDMzcwLjU3NCAzNTguOTMgNDIyLjkyOCAzMDYuNTc0IDQzMC4zODcgMjQwSDQ5NkM1MDQuODQ0IDI0MCA1MTIgMjMyLjg0NCA1MTIgMjI0UzUwNC44NDQgMjA4IDQ5NiAyMDhaTTI4OCAzMzZDMjI2LjI0MiAzMzYgMTc2IDI4NS43NTggMTc2IDIyNFMyMjYuMjQyIDExMiAyODggMTEyUzQwMCAxNjIuMjQyIDQwMCAyMjRTMzQ5Ljc1OCAzMzYgMjg4IDMzNlpNMjg4IDE3NkMyNjEuNTMxIDE3NiAyNDAgMTk3LjUzMSAyNDAgMjI0UzI2MS41MzEgMjcyIDI4OCAyNzJTMzM2IDI1MC40NjkgMzM2IDIyNFMzMTQuNDY5IDE3NiAyODggMTc2Wk0yODggMjQwQzI3OS4xODggMjQwIDI3MiAyMzIuODEyIDI3MiAyMjRTMjc5LjE4OCAyMDggMjg4IDIwOFMzMDQgMjE1LjE4OCAzMDQgMjI0UzI5Ni44MTIgMjQwIDI4OCAyNDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Mace(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M148.688 340.688L4.688 484.688C-1.563 490.938 -1.563 501.063 4.688 507.312C7.812 510.438 11.906 512 16 512S24.187 510.438 27.312 507.312L171.312 363.312C177.562 357.062 177.562 346.937 171.312 340.688S154.938 334.438 148.688 340.688ZM496 208H430.387C422.928 141.426 370.574 89.07 304 81.613V16C304 7.156 296.844 0 288 0S272 7.156 272 16V81.613C205.426 89.07 153.072 141.426 145.613 208H80C71.156 208 64 215.156 64 224S71.156 240 80 240H145.613C153.072 306.574 205.426 358.93 272 366.387V432C272 440.844 279.156 448 288 448S304 440.844 304 432V366.387C370.574 358.93 422.928 306.574 430.387 240H496C504.844 240 512 232.844 512 224S504.844 208 496 208ZM288 336C226.242 336 176 285.758 176 224S226.242 112 288 112S400 162.242 400 224S349.758 336 288 336ZM288 176C261.531 176 240 197.531 240 224S261.531 272 288 272S336 250.469 336 224S314.469 176 288 176ZM288 240C279.188 240 272 232.812 272 224S279.188 208 288 208S304 215.188 304 224S296.812 240 288 240Z" />
        </Icon>
    </>
}