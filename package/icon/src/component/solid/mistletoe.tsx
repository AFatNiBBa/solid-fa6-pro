
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mistletoe` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mistletoe?s=solid mistletoe}
 * @preview ![mistletoe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzEuOTM1IDExOS44ODdDMzk2LjI4NyAxMTkuODg3IDQxNiAxMDAuMjk3IDQxNiA3NS45MzhDNDE2IDUxLjU4NiAzOTYuMjg3IDMyIDM3MS45MzUgMzJDMzQ3LjcxMSAzMiAzMjggNTEuNzE1IDMyOCA3Ni4wN0MzMjggMTAwLjI5NyAzNDcuNzExIDExOS44ODcgMzcxLjkzNSAxMTkuODg3Wk01NDIuMDk2IDI2MS40MzhDNTE2LjA5NCAyMzUuNDMgNDUyLjQ2MyAyMjIuODA1IDQxMS4yMDkgMjE3LjMwNUwzMTEuOTUxIDExNy4xNTZDMzAzLjU3NCAxMDUuMDIzIDI5OC42OTkgOTAuNTIzIDI5OC42OTkgNzQuNzY2QzI5OC42OTkgNTguODkxIDMwMy42OTkgNDQuMzg3IDMxMS45NTEgMzIuMjU4VjI0LjAwNEMzMTEuOTUxIDEwLjgwMiAzMDEuMTQ5IDAgMjg3Ljk0NyAwSDI4Ny45NDdDMjc0Ljc0NiAwIDI2My45NDUgMTAuODAxIDI2My45NDUgMjQuMDAyVjExOC4xNTZMMTY0LjgxMiAyMTcuMzA1QzEyMy41NTggMjIyLjgwNSA1OS45MjggMjM1LjQzIDMzLjkyNiAyNjEuNDM4Qy02LjA3OCAzMDEuNDQ5IC0xMS40NTMgMzYwLjgzNiAyMS43OTkgMzk0LjIxOUM1NS4xNzggNDI3LjQ3NyAxMTQuNjgzIDQyMi4xMDIgMTU0LjU2IDM4Mi4wOTRDMTY1LjkzNyAzNzAuNzE1IDE3NC42ODcgMzUxLjgzNiAxODEuNDM5IDMzMS4wNzhDMTkwLjA2MyAzNDYuNzM5IDIwOC40ODMgMzU2LjQ2OSAyMjguODczIDM0OS44NkMyNDEuNDY0IDM0NS43NzggMjUxLjQ5NiAzMzUuMDgxIDI1NC42NzMgMzIyLjIzMUMyNjEuMjUxIDI5NS42MzIgMjQxLjQxMiAyNzEuOTQxIDIxNS45NDEgMjcxLjk0MUMyMDcuNjkxIDI3MS45NDEgMjAwLjU2NiAyNzUuMDY2IDE5NC4xODkgMjc5LjMyQzE5Ni4wNjQgMjY5LjMxNiAxOTcuNjg5IDI1OS42ODggMTk4LjY4OSAyNTEuMDYzTDI2My45NDUgMTg1Ljc5N1YyNTguNjg3QzI3OS4zNTIgMjcyLjUxNyAyODguOTM1IDI5Mi44NjUgMjg3Ljg2OCAzMTUuMzUzQzI4Ni42NTYgMzQwLjkxOSAyNjkuOTQ0IDM2My4wMjIgMjQ3LjQ3OSAzNzUuMjg2QzIyOC4xMiAzODUuODUzIDIxMi4zNjcgMzg1LjI0OCAxOTguMTg5IDM4MS40NjlDMTk0LjQzOSAzOTEuMzQ0IDE5MS45MzkgNDAwLjk3MyAxOTEuOTM5IDQwOS42MDJDMTkxLjkzOSA0NjYuMjM4IDIzNC45NDMgNTEyIDI4Ny45NDkgNTEyQzM0MC45NTMgNTEyIDM4My45NTcgNDY2LjIzOCAzODMuOTU3IDQwOS42MDJDMzgzLjk1NyAzNzEuNDY1IDM0MC4zMjggMzE0Ljk1MyAzMTEuOTUxIDI4Mi4zMlYxODUuOTIyTDM3Ny4yMDcgMjUxLjE4OEMzODIuNzA3IDI5Mi40NDUgMzk1LjMzNCAzNTYuMDg2IDQyMS4zMzYgMzgyLjA5NEM0NjEuMzQgNDIyLjEwMiA1MjAuNzE5IDQyNy40NzcgNTU0LjA5NyAzOTQuMjE5QzU4Ny40NzQgMzYwLjgzNiA1ODIuMDk5IDMwMS40NDkgNTQyLjA5NiAyNjEuNDM4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Mistletoe(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M371.935 119.887C396.287 119.887 416 100.297 416 75.938C416 51.586 396.287 32 371.935 32C347.711 32 328 51.715 328 76.07C328 100.297 347.711 119.887 371.935 119.887ZM542.096 261.438C516.094 235.43 452.463 222.805 411.209 217.305L311.951 117.156C303.574 105.023 298.699 90.523 298.699 74.766C298.699 58.891 303.699 44.387 311.951 32.258V24.004C311.951 10.802 301.149 0 287.947 0H287.947C274.746 0 263.945 10.801 263.945 24.002V118.156L164.812 217.305C123.558 222.805 59.928 235.43 33.926 261.438C-6.078 301.449 -11.453 360.836 21.799 394.219C55.178 427.477 114.683 422.102 154.56 382.094C165.937 370.715 174.687 351.836 181.439 331.078C190.063 346.739 208.483 356.469 228.873 349.86C241.464 345.778 251.496 335.081 254.673 322.231C261.251 295.632 241.412 271.941 215.941 271.941C207.691 271.941 200.566 275.066 194.189 279.32C196.064 269.316 197.689 259.688 198.689 251.063L263.945 185.797V258.687C279.352 272.517 288.935 292.865 287.868 315.353C286.656 340.919 269.944 363.022 247.479 375.286C228.12 385.853 212.367 385.248 198.189 381.469C194.439 391.344 191.939 400.973 191.939 409.602C191.939 466.238 234.943 512 287.949 512C340.953 512 383.957 466.238 383.957 409.602C383.957 371.465 340.328 314.953 311.951 282.32V185.922L377.207 251.188C382.707 292.445 395.334 356.086 421.336 382.094C461.34 422.102 520.719 427.477 554.097 394.219C587.474 360.836 582.099 301.449 542.096 261.438Z" />
        </Icon>
    </>
}