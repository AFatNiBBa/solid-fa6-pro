
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `globe` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/globe?s=regular globe}
 * @preview ![globe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTQyMi4wMjEgMTYwSDM3My4yNzlDMzY2Ljg4OSAxMzIuNTk0IDM1Ny44ODkgMTA3LjgyNCAzNDYuODAzIDg2Ljg5OEMzNzguMTU2IDEwMy44MDMgNDA0LjE2OCAxMjkuMjQ2IDQyMi4wMjEgMTYwWk0zMzYgMjU2QzMzNiAyNzIuOTg0IDMzNC43MDUgMjg4LjgxOCAzMzIuODI0IDMwNEgxNzkuMTc2QzE3Ny4yOTUgMjg4LjgxOCAxNzYgMjcyLjk4NCAxNzYgMjU2UzE3Ny4yOTUgMjIzLjE4MiAxNzkuMTc2IDIwOEgzMzIuODI0QzMzNC43MDUgMjIzLjE4MiAzMzYgMjM5LjAxNiAzMzYgMjU2Wk0yNTYgNDQ4QzIzNC4yMTUgNDQ4IDIwNS4xMjkgNDExLjU4IDE4OC43MTcgMzUySDMyMy4yODNDMzA2Ljg3MSA0MTEuNTggMjc3Ljc4NSA0NDggMjU2IDQ0OFpNMTg4LjcxNyAxNjBDMjA1LjEyOSAxMDAuNDIgMjM0LjIxNSA2NCAyNTYgNjRTMzA2Ljg3MSAxMDAuNDIgMzIzLjI4MyAxNjBIMTg4LjcxN1pNMTY1LjE5NyA4Ni44OThDMTU0LjExMSAxMDcuODI0IDE0NS4xMTEgMTMyLjU5NCAxMzguNzIxIDE2MEg4OS45NzlDMTA3LjgzMiAxMjkuMjQ2IDEzMy44NDQgMTAzLjgwMyAxNjUuMTk3IDg2Ljg5OFpNNzAuMzE4IDIwOEgxMzAuNTdDMTI4Ljg5MSAyMjMuNTEyIDEyOCAyMzkuNTYxIDEyOCAyNTZTMTI4Ljg5MSAyODguNDg4IDEzMC41NyAzMDRINzAuMzE4QzY2LjM0IDI4OC42MjcgNjQgMjcyLjYgNjQgMjU2UzY2LjM0IDIyMy4zNzMgNzAuMzE4IDIwOFpNODkuOTc5IDM1MkgxMzguNzIxQzE0NS4xMTEgMzc5LjQwNiAxNTQuMTExIDQwNC4xNzYgMTY1LjE5NyA0MjUuMTAyQzEzMy44NDQgNDA4LjE5NyAxMDcuODMyIDM4Mi43NTQgODkuOTc5IDM1MlpNMzQ2LjgwMyA0MjUuMTAyQzM1Ny44ODkgNDA0LjE3NiAzNjYuODg5IDM3OS40MDYgMzczLjI3OSAzNTJINDIyLjAyMUM0MDQuMTY4IDM4Mi43NTQgMzc4LjE1NiA0MDguMTk3IDM0Ni44MDMgNDI1LjEwMlpNNDQxLjY4MiAzMDRIMzgxLjQzQzM4My4xMDkgMjg4LjQ4OCAzODQgMjcyLjQzOSAzODQgMjU2UzM4My4xMDkgMjIzLjUxMiAzODEuNDMgMjA4SDQ0MS42ODJDNDQ1LjY2IDIyMy4zNzMgNDQ4IDIzOS40IDQ0OCAyNTZTNDQ1LjY2IDI4OC42MjcgNDQxLjY4MiAzMDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Globe(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM422.021 160H373.279C366.889 132.594 357.889 107.824 346.803 86.898C378.156 103.803 404.168 129.246 422.021 160ZM336 256C336 272.984 334.705 288.818 332.824 304H179.176C177.295 288.818 176 272.984 176 256S177.295 223.182 179.176 208H332.824C334.705 223.182 336 239.016 336 256ZM256 448C234.215 448 205.129 411.58 188.717 352H323.283C306.871 411.58 277.785 448 256 448ZM188.717 160C205.129 100.42 234.215 64 256 64S306.871 100.42 323.283 160H188.717ZM165.197 86.898C154.111 107.824 145.111 132.594 138.721 160H89.979C107.832 129.246 133.844 103.803 165.197 86.898ZM70.318 208H130.57C128.891 223.512 128 239.561 128 256S128.891 288.488 130.57 304H70.318C66.34 288.627 64 272.6 64 256S66.34 223.373 70.318 208ZM89.979 352H138.721C145.111 379.406 154.111 404.176 165.197 425.102C133.844 408.197 107.832 382.754 89.979 352ZM346.803 425.102C357.889 404.176 366.889 379.406 373.279 352H422.021C404.168 382.754 378.156 408.197 346.803 425.102ZM441.682 304H381.43C383.109 288.488 384 272.439 384 256S383.109 223.512 381.43 208H441.682C445.66 223.373 448 239.4 448 256S445.66 288.627 441.682 304Z" />
        </Icon>
    </>
}