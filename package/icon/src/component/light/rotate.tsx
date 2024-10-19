
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rotate` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rotate?s=light rotate}
 * @preview ![rotate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDcuOTg0IDI3Mi4yMTlDNDM5LjIxOSAyNzAuNjU2IDQzMS4wMTYgMjc2LjYyNSA0MjkuNTYyIDI4NS4zNDRDNDE1LjMxMiAzNzAuMzEyIDM0Mi4zMTIgNDMyIDI1NiA0MzJDMjA2LjAzNyA0MzIgMTU5Ljk3NyA0MTAuNDQxIDEyNy40MjggMzc1LjE5NUwxODcuMzEyIDMxNS4zMTJDMTkxLjg5MSAzMTAuNzUgMTkzLjI2NiAzMDMuODQ0IDE5MC43ODEgMjk3Ljg3NUMxODguMzEyIDI5MS45MDYgMTgyLjQ2OSAyODggMTc2IDI4OEg0OEMzOS4xNTYgMjg4IDMyIDI5NS4xNTYgMzIgMzA0VjQzMkMzMiA0MzguNDY5IDM1Ljg5MSA0NDQuMzEyIDQxLjg3NSA0NDYuNzgxQzQzLjg1OSA0NDcuNTk0IDQ1LjkzOCA0NDggNDggNDQ4QzUyLjE1NiA0NDggNTYuMjUgNDQ2LjM3NSA1OS4zMTIgNDQzLjMxMkwxMDQuOTE0IDM5Ny43MTFDMTQzLjMxNiA0MzguODUyIDE5Ny4zNTcgNDY0IDI1NiA0NjRDMzU4IDQ2NCA0NDQuMjY2IDM5MS4wOTQgNDYxLjEyNSAyOTAuNjU2QzQ2Mi41NzggMjgxLjkzOCA0NTYuNzAzIDI3My42ODggNDQ3Ljk4NCAyNzIuMjE5Wk02NCAzOTMuMzc1VjMyMEgxMzcuMzc1TDY0IDM5My4zNzVaTTQ3MC4xMjUgNjUuMjE5QzQ2OC4xNDEgNjQuNDA2IDQ2Ni4wNjIgNjQgNDY0IDY0QzQ1OS44NDQgNjQgNDU1Ljc1IDY1LjYyNSA0NTIuNjg4IDY4LjY4OEw0MDcuMDg2IDExNC4yODlDMzY4LjY4NCA3My4xNDggMzE0LjY0MyA0OCAyNTYgNDhDMTU0IDQ4IDY3LjczNCAxMjAuOTA2IDUwLjg3NSAyMjEuMzQ0QzQ5LjQyMiAyMzAuMDYyIDU1LjI5NyAyMzguMzEyIDY0LjAxNiAyMzkuNzgxQzcyLjc4MSAyNDEuMzQ0IDgwLjk4NCAyMzUuMzc1IDgyLjQzOCAyMjYuNjU2Qzk2LjY4OCAxNDEuNjg4IDE2OS42ODggODAgMjU2IDgwQzMwNS45NjMgODAgMzUyLjAyMyAxMDEuNTU5IDM4NC41NzIgMTM2LjgwNUwzMjQuNjg4IDE5Ni42ODhDMzIwLjEwOSAyMDEuMjUgMzE4LjczNCAyMDguMTU2IDMyMS4yMTkgMjE0LjEyNUMzMjMuNjg4IDIyMC4wOTQgMzI5LjUzMSAyMjQgMzM2IDIyNEg0NjRDNDcyLjg0NCAyMjQgNDgwIDIxNi44NDQgNDgwIDIwOFY4MEM0ODAgNzMuNTMxIDQ3Ni4xMDkgNjcuNjg4IDQ3MC4xMjUgNjUuMjE5Wk00NDggMTkySDM3NC42MjVMNDQ4IDExOC42MjVWMTkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Rotate(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M447.984 272.219C439.219 270.656 431.016 276.625 429.562 285.344C415.312 370.312 342.312 432 256 432C206.037 432 159.977 410.441 127.428 375.195L187.312 315.312C191.891 310.75 193.266 303.844 190.781 297.875C188.312 291.906 182.469 288 176 288H48C39.156 288 32 295.156 32 304V432C32 438.469 35.891 444.312 41.875 446.781C43.859 447.594 45.938 448 48 448C52.156 448 56.25 446.375 59.312 443.312L104.914 397.711C143.316 438.852 197.357 464 256 464C358 464 444.266 391.094 461.125 290.656C462.578 281.938 456.703 273.688 447.984 272.219ZM64 393.375V320H137.375L64 393.375ZM470.125 65.219C468.141 64.406 466.062 64 464 64C459.844 64 455.75 65.625 452.688 68.688L407.086 114.289C368.684 73.148 314.643 48 256 48C154 48 67.734 120.906 50.875 221.344C49.422 230.062 55.297 238.312 64.016 239.781C72.781 241.344 80.984 235.375 82.438 226.656C96.688 141.688 169.688 80 256 80C305.963 80 352.023 101.559 384.572 136.805L324.688 196.688C320.109 201.25 318.734 208.156 321.219 214.125C323.688 220.094 329.531 224 336 224H464C472.844 224 480 216.844 480 208V80C480 73.531 476.109 67.688 470.125 65.219ZM448 192H374.625L448 118.625V192Z" />
        </Icon>
    </>
}