
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `scribble` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scribble?s=solid scribble}
 * @preview ![scribble](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTMuNDkgNDg2Ljk5TDQ2MS44OTcgNTAxLjY5QzQ0OC4wMDYgNTA4LjY0MSA0MzMuMTc4IDUxMiA0MTguNDkxIDUxMkMzODguNTIzIDUxMiAzNTkuMTE3IDQ5OC4wMDMgMzM5LjIyNiA0NzEuOTc3QzMxMC4xNDggNDMzLjk1NCAzMTIuNTA4IDM4My45MzMgMzQ1LjA3IDM0Ny40ODhMNDQxLjI1NiAyMzUuMDc0QzQ0OS45MTMgMjI1LjgyNiA0NDkuODgxIDIxMy4xNTcgNDQyLjIyNSAyMDUuMDk2QzQzOC4yNzIgMjAwLjkyNSA0MzIuOTQ0IDE5OC41OTcgNDI3LjE5NCAxOTguNTM1QzQyMi40NzUgMTk4LjE5MSA0MTYuMDY5IDIwMC42NzUgNDEyLjAyMiAyMDQuNzM2TDE3Ny4yMTIgNDU0LjIxNUMxNjAuMjkgNDcxLjE5NiAxMzguMjc1IDQ4MS4wMzggMTE1LjU0MSA0NzkuNzFDOTIuNDYzIDQ3OS40MTMgNzEuMDI2IDQ3MC4wMDkgNTUuMTUxIDQ1My4yNjJDMjMuODIzIDQyMC4xNzYgMjQuMTk4IDM2OC43MDIgNTYuMDQyIDMzNi4wNTNMMjYzLjYzMyAxMjMuMjU0QzI3NS41NzEgMTA5Ljk0NCAyNzQuOTkyIDg4LjEzNiAyNjEuNDE0IDc0LjU5MkMyNTQuMzY4IDY3LjU0NyAyNDQuODk5IDYzLjY0MSAyMzUuMDcxIDY0LjAxNkMyMjUuMTE4IDY0LjIzNSAyMTUuOTMxIDY4LjQwNiAyMDkuMjEyIDc1LjczMkw1NC40MzIgMjI3Ljk2NkM0MS43OTIgMjQwLjMzOCAyMS41NTggMjQwLjE4MiA5LjE4MyAyMjcuNTkxQy0zLjIwOCAyMTQuOTg0IC0zLjAzNiAxOTQuNzM5IDkuNTU4IDE4Mi4zNTFMMTYzLjE4MSAzMS4zMkMxODAuNjUgMTIuMTgzIDIwNi4wODcgMC42NTQgMjMzLjY0OSAwLjA0NUMyNjAuOTMgLTAuNzgzIDI4Ny4xMzMgOS44MDkgMzA2LjY2NCAyOS4zMkMzNDQuMzA0IDY2LjkzNyAzNDUuOTE0IDEyNy40MDkgMzEwLjMzNiAxNjYuOTc5TDEwMS44NTQgMzgwLjczMUM5NC4xMDQgMzg4LjY4MiA5My45OTQgNDAxLjIxMSAxMDEuNjM1IDQwOS4yNTZDMTA1LjUxIDQxMy4zNjUgMTEwLjc0NCA0MTUuNjYxIDExNi4zODUgNDE1LjczOUMxMjEuNjUgNDE1LjQ0MiAxMjcuMjkxIDQxMy42NjEgMTMxLjI2IDQwOS42NzhMMzY2LjAyMyAxNjAuMjYxQzM4Mi45NDQgMTQzLjIwMyA0MDUuMDIyIDEzNC41MTcgNDI3LjkyOCAxMzQuNTQ4QzQ1MS4xMzEgMTM0LjgxNCA0NzIuNjk0IDE0NC4yMTggNDg4LjY2MiAxNjEuMDQzQzUxOS42NjIgMTkzLjcyMyA1MTkuNzU2IDI0NS4wMDkgNDg4Ljg2NSAyNzcuNzk5TDM5My4yNDEgMzg5LjYwNEMzNzUuNDc2IDQwOS41MDYgMzg1LjExNiA0MjYuNjU5IDM5MC4wNjkgNDMzLjEyNkMzOTkuMTMyIDQ0NC45OTggNDE2LjI3MiA0NTIuOTUgNDM0LjA4NSA0NDQuMDYxTDQ2Ni40OSA0MjguOTcxQzQ4Mi40NzUgNDIxLjU1IDUwMS41MzcgNDI4LjQ1NSA1MDkuMDA2IDQ0NC40ODNDNTE2LjQ1OSA0NjAuNDk1IDUwOS41MjEgNDc5LjUzOCA0OTMuNDkgNDg2Ljk5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Scribble(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M493.49 486.99L461.897 501.69C448.006 508.641 433.178 512 418.491 512C388.523 512 359.117 498.003 339.226 471.977C310.148 433.954 312.508 383.933 345.07 347.488L441.256 235.074C449.913 225.826 449.881 213.157 442.225 205.096C438.272 200.925 432.944 198.597 427.194 198.535C422.475 198.191 416.069 200.675 412.022 204.736L177.212 454.215C160.29 471.196 138.275 481.038 115.541 479.71C92.463 479.413 71.026 470.009 55.151 453.262C23.823 420.176 24.198 368.702 56.042 336.053L263.633 123.254C275.571 109.944 274.992 88.136 261.414 74.592C254.368 67.547 244.899 63.641 235.071 64.016C225.118 64.235 215.931 68.406 209.212 75.732L54.432 227.966C41.792 240.338 21.558 240.182 9.183 227.591C-3.208 214.984 -3.036 194.739 9.558 182.351L163.181 31.32C180.65 12.183 206.087 0.654 233.649 0.045C260.93 -0.783 287.133 9.809 306.664 29.32C344.304 66.937 345.914 127.409 310.336 166.979L101.854 380.731C94.104 388.682 93.994 401.211 101.635 409.256C105.51 413.365 110.744 415.661 116.385 415.739C121.65 415.442 127.291 413.661 131.26 409.678L366.023 160.261C382.944 143.203 405.022 134.517 427.928 134.548C451.131 134.814 472.694 144.218 488.662 161.043C519.662 193.723 519.756 245.009 488.865 277.799L393.241 389.604C375.476 409.506 385.116 426.659 390.069 433.126C399.132 444.998 416.272 452.95 434.085 444.061L466.49 428.971C482.475 421.55 501.537 428.455 509.006 444.483C516.459 460.495 509.521 479.538 493.49 486.99Z" />
        </Icon>
    </>
}