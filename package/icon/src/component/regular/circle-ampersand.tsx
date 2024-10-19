
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-ampersand` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ampersand?s=regular circle-ampersand}
 * @preview ![circle-ampersand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzEuNTAyIDMxNS4zNDRMMzU5LjY1NiAyNzQuMDMxQzM2Ny4xMjUgMjYzLjA3OCAzNjQuMjgxIDI0OC4xNDEgMzUzLjM0NCAyNDAuNjg4QzM0Mi4zNzUgMjMzLjIwMyAzMjcuNDY5IDIzNi4wNzggMzE5Ljk2OSAyNDdMMjk4LjIwNyAyNzguOTMyTDI2OC40NjkgMjQ2LjQwNkwyODguMTU2IDIzMC41MTZDMzAxLjc1IDIxOS41MTYgMzA5LjU2MiAyMDMuMTU2IDMwOS41NjIgMTg1LjY1NkMzMDkuNTYyIDE1My44NTkgMjgzLjY4OCAxMjggMjUxLjkwNiAxMjhIMjI4Ljc4MUMxOTcgMTI4IDE3MS4xMjUgMTUzLjg1OSAxNzEuMTI1IDE4NS42NTZDMTcxLjEyNSAyMDIuMDE2IDE3Ny4xODcgMjE3LjY4OCAxODguMjUgMjI5Ljc5N0wxOTguNTk0IDI0MS4xMjVMMTY4Ljg0NCAyNjUuMTcyQzE1My4wNjIgMjc3LjkwNiAxNDQgMjk2Ljg1OSAxNDQgMzE3LjE1NkMxNDQgMzU0LjAxNiAxNzQgMzg0IDIxMC44NDQgMzg0SDI0My4zMTJDMjY2LjcxOSAzODQgMjg4LjY4OCAzNzMuNTk0IDMwMy40NjkgMzU1LjgxMkwzMjIuMDk0IDM3Ni4xODhDMzI2Ljg0NCAzODEuMzc1IDMzMy4zMTIgMzg0IDMzOS44MTIgMzg0QzM0NS41OTQgMzg0IDM1MS40MDYgMzgxLjkyMiAzNTYgMzc3LjcxOUMzNjUuNzgxIDM2OC43NjYgMzY2LjQ2OSAzNTMuNTk0IDM1Ny41MzEgMzQzLjgxMkwzMzEuNTAyIDMxNS4zNDRaTTIyOC43ODEgMTc2SDI1MS45MDZDMjU3LjIxOSAxNzYgMjYxLjU2MiAxODAuMzI4IDI2MS41NjIgMTg1LjY1NkMyNjEuNTYyIDE4OC41OTQgMjYwLjI1IDE5MS4zNDQgMjU3Ljk2OSAxOTMuMTcyTDIzNi4wMzEgMjEwLjkwNkwyMjMuNjg4IDE5Ny40MzhDMjIwLjc1IDE5NC4yMDMgMjE5LjEyNSAxOTAuMDE2IDIxOS4xMjUgMTg1LjY1NkMyMTkuMTI1IDE4MC4zMjggMjIzLjQ2OSAxNzYgMjI4Ljc4MSAxNzZaTTI2OC4zMTIgMzIyLjc5N0MyNjIuNjg4IDMzMS4wNjIgMjUzLjM0NCAzMzYgMjQzLjMxMiAzMzZIMjEwLjg0NEMyMDAuNDY5IDMzNiAxOTIgMzI3LjU0NyAxOTIgMzE3LjE1NkMxOTIgMzExLjQzOCAxOTQuNTMxIDMwNi4wOTQgMTk5IDMwMi41MTZMMjMxLjA2MiAyNzYuNjA5TDI3MC40MyAzMTkuNjkxTDI2OC4zMTIgMzIyLjc5N1pNMjU2IDE2QzEyMy40NTEgMTYgMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0OSA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2Wk0yNTYgNDQ4QzE1MC4xMzEgNDQ4IDY0IDM2MS44NjkgNjQgMjU2UzE1MC4xMzEgNjQgMjU2IDY0UzQ0OCAxNTAuMTMxIDQ0OCAyNTZTMzYxLjg2OSA0NDggMjU2IDQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleAmpersand(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M331.502 315.344L359.656 274.031C367.125 263.078 364.281 248.141 353.344 240.688C342.375 233.203 327.469 236.078 319.969 247L298.207 278.932L268.469 246.406L288.156 230.516C301.75 219.516 309.562 203.156 309.562 185.656C309.562 153.859 283.688 128 251.906 128H228.781C197 128 171.125 153.859 171.125 185.656C171.125 202.016 177.187 217.688 188.25 229.797L198.594 241.125L168.844 265.172C153.062 277.906 144 296.859 144 317.156C144 354.016 174 384 210.844 384H243.312C266.719 384 288.688 373.594 303.469 355.812L322.094 376.188C326.844 381.375 333.312 384 339.812 384C345.594 384 351.406 381.922 356 377.719C365.781 368.766 366.469 353.594 357.531 343.812L331.502 315.344ZM228.781 176H251.906C257.219 176 261.562 180.328 261.562 185.656C261.562 188.594 260.25 191.344 257.969 193.172L236.031 210.906L223.688 197.438C220.75 194.203 219.125 190.016 219.125 185.656C219.125 180.328 223.469 176 228.781 176ZM268.312 322.797C262.688 331.062 253.344 336 243.312 336H210.844C200.469 336 192 327.547 192 317.156C192 311.438 194.531 306.094 199 302.516L231.062 276.609L270.43 319.691L268.312 322.797ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" />
        </Icon>
    </>
}