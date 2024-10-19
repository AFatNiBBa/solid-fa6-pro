
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `earth-americas` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/earth-americas?s=solid earth-americas}
 * @preview ![earth-americas](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ2MSAxNiAxNiAxMjMuNDE4IDE2IDI1NlMxMjMuNDYxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTgyIDQ5NiAyNTZTMzg4LjUzOSAxNiAyNTYgMTZaTTIzMy4zNTUgMzc3LjM3NUMyMjcuNDIyIDM3MS4zNzUgMjI0LjAzMSAzNjMuMjUgMjI0LjAzMSAzNTQuNzVWMzIyLjc1QzIyNC4wMzEgMzExLjEyNSAyMTcuNzM0IDMwMC4zNzUgMjA3LjU2MyAyOTQuNzVDMTkzLjE1MiAyODYuNzUgMTcyLjY4OCAyNzUuNzUgMTU4Ljc2MiAyNjguNjI1QzE0Ny4yNTggMjYyLjg3NSAxMzYuNjAyIDI1NS41IDEyNy4wMzUgMjQ2Ljg3NUwxMjYuMzA5IDI0Ni4xMjVDMTE5LjQwNiAyNDAgMTEzLjM1MiAyMzMgMTA4LjI2NiAyMjUuNUMxMDAuMzEyIDIxMy44MiA4OC40MDYgMTk2LjE4IDc4Ljg2MyAxODIuMDE2Qzk4Ljk1MSAxMzQuMTAyIDEzNy45ODggOTYuMTQ4IDE4Ni40OSA3Ny4yMjNMMjAwLjc4MSA4NC4zNzVDMjExLjQzNyA4OS43NSAyMjQuMDMxIDgyIDIyNC4wMzEgNzAuMTI1VjY2Ljg4M0MyMzQuNDQ5IDY1LjEyNSAyNDUuMDc2IDY0IDI1NS45ODYgNjRMMjc2LjcwNyA4NC43NUMyODIuODgzIDkxIDI4Mi44ODMgMTAxLjEyNSAyNzYuNzA3IDEwNy4zNzVMMjcxLjk4NCAxMTJMMjYxLjY5MSAxMjIuMzc1QzI1OC41NDMgMTI1LjUgMjU4LjU0MyAxMzAuNSAyNjEuNjkxIDEzMy42MjVMMjY2LjI5MyAxMzguMzc1QzI2OS40NDEgMTQxLjUgMjY5LjQ0MSAxNDYuNSAyNjYuMjkzIDE0OS42MjVMMjU4LjMwMSAxNTcuNjI1QzI1Ni44NDggMTU5LjEyNSAyNTQuNzg5IDE2MCAyNTIuNzMgMTYwSDI0My42NDhDMjQxLjU5IDE2MCAyMzkuNjUyIDE2MC43NSAyMzguMDc4IDE2Mi4yNUwyMjguMTQ4IDE3MS44NzVDMjI1LjcyNyAxNzQuMzc1IDIyNS4xMjEgMTc4LjEyNSAyMjYuNTc0IDE4MS4yNUwyNDIuMTk1IDIxMi4zNzVDMjQ0Ljg1OSAyMTcuNzUgMjQwLjk4NCAyMjQgMjM1LjA1MSAyMjRIMjI5LjQ4QzIyNy41NDMgMjI0IDIyNS42MDUgMjIzLjI1IDIyNC4xNTIgMjIyTDIxNC45NDkgMjE0QzIxMC41OSAyMTAuMjUgMjA0Ljc3NyAyMDkuMTI1IDE5OS4zMjggMjEwLjg3NUwxNjguMjA3IDIyMS4yNUMxNjMuMjQyIDIyMi44NzUgMTU5Ljk3MyAyMjcuNSAxNTkuOTczIDIzMi42MjVDMTU5Ljk3MyAyMzcuMTI1IDE2Mi41MTYgMjQxLjI1IDE2Ni42MzMgMjQzLjI1TDE3Ny42NTIgMjQ4Ljg3NUMxODcuMDk4IDI1My41IDE5Ny41MTIgMjU2IDIwOC4wNDcgMjU2UzIzMC41NyAyODMuMjUgMjQwLjAxNiAyODhIMzA2LjczOEMzMTUuMjE1IDI4OCAzMjMuMzI4IDI5MS4zNzUgMzI5LjM4MyAyOTcuMzc1TDM0My4wNjYgMzExQzM0OC43NTggMzE2Ljc1IDM1Mi4wMjcgMzI0LjUgMzUyLjAyNyAzMzIuNjI1QzM1Mi4wMjcgMzQ1IDM0Ny4wNjIgMzU2Ljg3NSAzMzguMzQ0IDM2NS42MjVDMzM0LjM0OCAzNjkuNSAzMzAuMzUyIDM3My41IDMyNi45NjEgMzc2Ljg3NUMzMjMuOTM0IDM3OS44NzUgMzIxLjg3NSAzODMuNjI1IDMyMC43ODUgMzg3LjYyNUMzMTkuMzMyIDM5My4yNSAzMTguMTIxIDM5OSAzMTYuMDYyIDQwNC41TDMwMi4wMDIgNDQyLjE5NUMyODcuMjM0IDQ0NS44NDggMjcxLjg4MSA0NDggMjU2IDQ0OFY0MjguNjI1QzI1Ny42OTUgNDE2IDI0OC4zNzEgMzkyLjM3NSAyMzMuMzU1IDM3Ny4zNzVaTTQyNS4wNDcgMjc0LjI1QzQxOS4yMzQgMjcyLjc1IDQxNC4xNDggMjY5LjI1IDQxMC44NzkgMjY0LjI1TDM5Mi44MzYgMjM3LjI1QzM4Ny41MDggMjI5LjI1IDM4Ny41MDggMjE4Ljc1IDM5Mi44MzYgMjEwLjc1TDQxMi40NTMgMTgxLjI1QzQxNC43NTQgMTc3Ljg3NSA0MTcuOTAyIDE3NSA0MjEuNjU2IDE3My4xMjVMNDI3LjUyIDE3MC4yMTFDNDQwLjUwOCAxOTYuMDcgNDQ4IDIyNS4xNDggNDQ4IDI1NkM0NDggMjYzLjk5MiA0NDcuMzU1IDI3MS44MiA0NDYuNDAyIDI3OS41NTVMNDI1LjA0NyAyNzQuMjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function EarthAmericas(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.461 16 16 123.418 16 256S123.461 496 256 496S496 388.582 496 256S388.539 16 256 16ZM233.355 377.375C227.422 371.375 224.031 363.25 224.031 354.75V322.75C224.031 311.125 217.734 300.375 207.563 294.75C193.152 286.75 172.688 275.75 158.762 268.625C147.258 262.875 136.602 255.5 127.035 246.875L126.309 246.125C119.406 240 113.352 233 108.266 225.5C100.312 213.82 88.406 196.18 78.863 182.016C98.951 134.102 137.988 96.148 186.49 77.223L200.781 84.375C211.437 89.75 224.031 82 224.031 70.125V66.883C234.449 65.125 245.076 64 255.986 64L276.707 84.75C282.883 91 282.883 101.125 276.707 107.375L271.984 112L261.691 122.375C258.543 125.5 258.543 130.5 261.691 133.625L266.293 138.375C269.441 141.5 269.441 146.5 266.293 149.625L258.301 157.625C256.848 159.125 254.789 160 252.73 160H243.648C241.59 160 239.652 160.75 238.078 162.25L228.148 171.875C225.727 174.375 225.121 178.125 226.574 181.25L242.195 212.375C244.859 217.75 240.984 224 235.051 224H229.48C227.543 224 225.605 223.25 224.152 222L214.949 214C210.59 210.25 204.777 209.125 199.328 210.875L168.207 221.25C163.242 222.875 159.973 227.5 159.973 232.625C159.973 237.125 162.516 241.25 166.633 243.25L177.652 248.875C187.098 253.5 197.512 256 208.047 256S230.57 283.25 240.016 288H306.738C315.215 288 323.328 291.375 329.383 297.375L343.066 311C348.758 316.75 352.027 324.5 352.027 332.625C352.027 345 347.062 356.875 338.344 365.625C334.348 369.5 330.352 373.5 326.961 376.875C323.934 379.875 321.875 383.625 320.785 387.625C319.332 393.25 318.121 399 316.062 404.5L302.002 442.195C287.234 445.848 271.881 448 256 448V428.625C257.695 416 248.371 392.375 233.355 377.375ZM425.047 274.25C419.234 272.75 414.148 269.25 410.879 264.25L392.836 237.25C387.508 229.25 387.508 218.75 392.836 210.75L412.453 181.25C414.754 177.875 417.902 175 421.656 173.125L427.52 170.211C440.508 196.07 448 225.148 448 256C448 263.992 447.355 271.82 446.402 279.555L425.047 274.25Z" />
        </Icon>
    </>
}