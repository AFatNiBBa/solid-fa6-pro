
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-q` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-q?s=duotone circle-q}
 * @preview ![circle-q](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMzc2Ljk2OSAzNDMuMDMxQzM4Ni4zNDQgMzUyLjQwNiAzODYuMzQ0IDM2Ny41OTQgMzc2Ljk2OSAzNzYuOTY5QzM3Mi4yODEgMzgxLjY1NiAzNjYuMTU2IDM4NCAzNjAgMzg0UzM0Ny43MTkgMzgxLjY1NiAzNDMuMDMxIDM3Ni45NjlMMzI3Ljg3OSAzNjEuODE2QzMwNy4zNzEgMzc1Ljc5MSAyODIuNjM5IDM4NCAyNTYgMzg0QzE4NS40MDYgMzg0IDEyOCAzMjYuNTc4IDEyOCAyNTZTMTg1LjQwNiAxMjggMjU2IDEyOFMzODQgMTg1LjQyMiAzODQgMjU2QzM4NCAyODIuNjM1IDM3NS43ODkgMzA3LjM2OSAzNjEuODE0IDMyNy44NzdMMzc2Ljk2OSAzNDMuMDMxWk0yNTYgMTc2QzIxMS44NzUgMTc2IDE3NiAyMTEuODkxIDE3NiAyNTZTMjExLjg3NSAzMzYgMjU2IDMzNkMyNjkuMzA3IDMzNiAyODEuNjcgMzMyLjQyNCAyOTIuNzE5IDMyNi42NTZMMjYzLjAzMSAyOTYuOTY5QzI1My42NTYgMjg3LjU5NCAyNTMuNjU2IDI3Mi40MDYgMjYzLjAzMSAyNjMuMDMxUzI4Ny41OTQgMjUzLjY1NiAyOTYuOTY5IDI2My4wMzFMMzI2LjY1NiAyOTIuNzE5QzMzMi40MjYgMjgxLjY3IDMzNiAyNjkuMzA1IDMzNiAyNTZDMzM2IDIxMS44OTEgMzAwLjEyNSAxNzYgMjU2IDE3NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjU2IDEyOEMxODUuNDA2IDEyOCAxMjggMTg1LjQyMiAxMjggMjU2UzE4NS40MDYgMzg0IDI1NiAzODRDMjgyLjYzOSAzODQgMzA3LjM3MSAzNzUuNzkxIDMyNy44NzkgMzYxLjgxNkwzNDMuMDMxIDM3Ni45NjlDMzQ3LjcxOSAzODEuNjU2IDM1My44NDQgMzg0IDM2MCAzODRTMzcyLjI4MSAzODEuNjU2IDM3Ni45NjkgMzc2Ljk2OUMzODYuMzQ0IDM2Ny41OTQgMzg2LjM0NCAzNTIuNDA2IDM3Ni45NjkgMzQzLjAzMUwzNjEuODE0IDMyNy44NzdDMzc1Ljc4OSAzMDcuMzY5IDM4NCAyODIuNjM1IDM4NCAyNTZDMzg0IDE4NS40MjIgMzI2LjU5NCAxMjggMjU2IDEyOFpNMzI2LjY1NiAyOTIuNzE5TDI5Ni45NjkgMjYzLjAzMUMyODcuNTk0IDI1My42NTYgMjcyLjQwNiAyNTMuNjU2IDI2My4wMzEgMjYzLjAzMVMyNTMuNjU2IDI4Ny41OTQgMjYzLjAzMSAyOTYuOTY5TDI5Mi43MTkgMzI2LjY1NkMyODEuNjcgMzMyLjQyNCAyNjkuMzA3IDMzNiAyNTYgMzM2QzIxMS44NzUgMzM2IDE3NiAzMDAuMTA5IDE3NiAyNTZTMjExLjg3NSAxNzYgMjU2IDE3NlMzMzYgMjExLjg5MSAzMzYgMjU2QzMzNiAyNjkuMzA1IDMzMi40MjYgMjgxLjY3IDMyNi42NTYgMjkyLjcxOVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function CircleQ(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM376.969 343.031C386.344 352.406 386.344 367.594 376.969 376.969C372.281 381.656 366.156 384 360 384S347.719 381.656 343.031 376.969L327.879 361.816C307.371 375.791 282.639 384 256 384C185.406 384 128 326.578 128 256S185.406 128 256 128S384 185.422 384 256C384 282.635 375.789 307.369 361.814 327.877L376.969 343.031ZM256 176C211.875 176 176 211.891 176 256S211.875 336 256 336C269.307 336 281.67 332.424 292.719 326.656L263.031 296.969C253.656 287.594 253.656 272.406 263.031 263.031S287.594 253.656 296.969 263.031L326.656 292.719C332.426 281.67 336 269.305 336 256C336 211.891 300.125 176 256 176Z" />
            <path d="M256 128C185.406 128 128 185.422 128 256S185.406 384 256 384C282.639 384 307.371 375.791 327.879 361.816L343.031 376.969C347.719 381.656 353.844 384 360 384S372.281 381.656 376.969 376.969C386.344 367.594 386.344 352.406 376.969 343.031L361.814 327.877C375.789 307.369 384 282.635 384 256C384 185.422 326.594 128 256 128ZM326.656 292.719L296.969 263.031C287.594 253.656 272.406 253.656 263.031 263.031S253.656 287.594 263.031 296.969L292.719 326.656C281.67 332.424 269.307 336 256 336C211.875 336 176 300.109 176 256S211.875 176 256 176S336 211.891 336 256C336 269.305 332.426 281.67 326.656 292.719Z" />
        </Icon>
    </>
}