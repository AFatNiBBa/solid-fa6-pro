
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gramophone` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gramophone?s=thin gramophone}
 * @preview ![gramophone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgNDQ4VjQxNkMzNTIgMzk4LjMyOCAzMzcuNjc0IDM4NCAzMjAgMzg0SDY0QzQ2LjMyNiAzODQgMzIgMzk4LjMyOCAzMiA0MTZWNDQ4QzE0LjMyNiA0NDggMCA0NjIuMzI4IDAgNDgwUzE0LjMyNiA1MTIgMzIgNTEySDM1MkMzNjkuNjc0IDUxMiAzODQgNDk3LjY3MiAzODQgNDgwUzM2OS42NzQgNDQ4IDM1MiA0NDhaTTQ4IDQxNkM0OCA0MDcuMTc2IDU1LjE3OCA0MDAgNjQgNDAwSDMyMEMzMjguODIyIDQwMCAzMzYgNDA3LjE3NiAzMzYgNDE2VjQ0OEg0OFY0MTZaTTM1MiA0OTZIMzJDMjMuMTc4IDQ5NiAxNiA0ODguODI0IDE2IDQ4MFMyMy4xNzggNDY0IDMyIDQ2NEgzNTJDMzYwLjgyMiA0NjQgMzY4IDQ3MS4xNzYgMzY4IDQ4MFMzNjAuODIyIDQ5NiAzNTIgNDk2Wk01Ni4yMDEgMzIwQzYwLjY3IDMyMCA2NS4yNjYgMzE4LjcxMSA2OS41MTggMzE1LjgyQzEyNS40MzQgMjc3LjYyNSAyMDQuMTA0IDIzNC45NjEgMjg4LjM0NiAyMjUuOTM0TDMzMS4yMTkgMjM0LjkwNkMzNTIuODc1IDI0MS40MDYgMzY4IDI2MS43MTkgMzY4IDI4NC4zNDRDMzY4IDMxMi44MTIgMzQ0LjgyOCAzMzUuOTY5IDMxNi4zNTkgMzM1Ljk2OUwxNjguMDE2IDMzNS44NzVDMTYzLjU5NCAzMzUuODc1IDE2MC4wMTYgMzM5LjQ2OSAxNjAuMDE2IDM0My44NzVTMTYzLjU5NCAzNTEuODc1IDE2OC4wMTYgMzUxLjg3NUwzMTYuMzU5IDM1MS45NjlDMzUzLjY1NiAzNTEuOTY5IDM4NCAzMjEuNjI1IDM4NCAyODQuMzQ0QzM4NCAyNTQuNzE5IDM2NC4xODggMjI4LjA5NCAzMzUuMTU2IDIxOS40MDZMMjg4LjY0OCAyMDkuNjI5QzIyNi40NTkgMTY5Ljk1NyAxNzguNTMxIDcxLjE3NiAxNTAuODkzIDEzLjU1NUMxNDYuNDg0IDQuMzc1IDEzNy45MDYgMCAxMjkuMzUyIDBDMTE5LjIyNyAwIDEwOS4xMzUgNi4xMjUgMTA2LjAxOCAxNy42NjRMMzIuODkzIDI4OS44MDFDMjguMzk2IDMwNi4yODUgNDEuNjIxIDMyMCA1Ni4yMDEgMzIwWk0xMjEuNDY1IDIxLjgzNkMxMjIuOTY1IDE2LjI4MSAxMjguMjk3IDE2IDEyOS4zNSAxNkgxMjkuMzUyQzEzMS42MTcgMTYgMTM0LjY5MSAxNi43NzcgMTM2LjQ2NyAyMC40NzNDMTYyLjQ0NSA3NC42MzcgMjA2LjEwNSAxNjUuNjUyIDI2NS4zMTggMjEyLjczQzIwMC41NzYgMjIzLjcxOSAxMzEuOTI4IDI1My44MTIgNjAuNTIxIDMwMi41OUM1OS4xMjUgMzAzLjUzOSA1Ny43MTMgMzA0IDU2LjIwMSAzMDRDNTMuNzAzIDMwNCA1MS4wNjYgMzAyLjY2IDQ5LjQ4IDMwMC41ODJDNDguMDIxIDI5OC42NzIgNDcuNjQ1IDI5Ni41MjMgNDguMzQ0IDI5My45NTNMMTIxLjQ2NSAyMS44MzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Gramophone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M352 448V416C352 398.328 337.674 384 320 384H64C46.326 384 32 398.328 32 416V448C14.326 448 0 462.328 0 480S14.326 512 32 512H352C369.674 512 384 497.672 384 480S369.674 448 352 448ZM48 416C48 407.176 55.178 400 64 400H320C328.822 400 336 407.176 336 416V448H48V416ZM352 496H32C23.178 496 16 488.824 16 480S23.178 464 32 464H352C360.822 464 368 471.176 368 480S360.822 496 352 496ZM56.201 320C60.67 320 65.266 318.711 69.518 315.82C125.434 277.625 204.104 234.961 288.346 225.934L331.219 234.906C352.875 241.406 368 261.719 368 284.344C368 312.812 344.828 335.969 316.359 335.969L168.016 335.875C163.594 335.875 160.016 339.469 160.016 343.875S163.594 351.875 168.016 351.875L316.359 351.969C353.656 351.969 384 321.625 384 284.344C384 254.719 364.188 228.094 335.156 219.406L288.648 209.629C226.459 169.957 178.531 71.176 150.893 13.555C146.484 4.375 137.906 0 129.352 0C119.227 0 109.135 6.125 106.018 17.664L32.893 289.801C28.396 306.285 41.621 320 56.201 320ZM121.465 21.836C122.965 16.281 128.297 16 129.35 16H129.352C131.617 16 134.691 16.777 136.467 20.473C162.445 74.637 206.105 165.652 265.318 212.73C200.576 223.719 131.928 253.812 60.521 302.59C59.125 303.539 57.713 304 56.201 304C53.703 304 51.066 302.66 49.48 300.582C48.021 298.672 47.645 296.523 48.344 293.953L121.465 21.836Z" />
        </Icon>
    </>
}