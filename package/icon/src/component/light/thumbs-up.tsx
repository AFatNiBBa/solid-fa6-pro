
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `thumbs-up` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/thumbs-up?s=light thumbs-up}
 * @preview ![thumbs-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04OCAxOTJINDBDMTcuOTM4IDE5MiAwIDIwOS45MzggMCAyMzJWNDQwQzAgNDYyLjA2MiAxNy45MzggNDgwIDQwIDQ4MEg4OEMxMTAuMDYyIDQ4MCAxMjggNDYyLjA2MiAxMjggNDQwVjIzMkMxMjggMjA5LjkzOCAxMTAuMDYyIDE5MiA4OCAxOTJaTTk2IDQ0MEM5NiA0NDQuNDA2IDkyLjQwNiA0NDggODggNDQ4SDQwQzM1LjU5NCA0NDggMzIgNDQ0LjQwNiAzMiA0NDBWMjMyQzMyIDIyNy41OTQgMzUuNTk0IDIyNCA0MCAyMjRIODhDOTIuNDA2IDIyNCA5NiAyMjcuNTk0IDk2IDIzMlY0NDBaTTUxMiAyMjEuNDY5QzUxMiAxODcuNTc4IDQ4NC40MDYgMTYwIDQ1MC41IDE2MEgzNDguMDMxQzM2MC4wMTYgMTMyLjkzOCAzNjYuODU5IDEwNi41MTYgMzY2Ljg1OSA5Mi42NzJDMzY2Ljg1OSA2Mi44NDQgMzQzLjY4OCAzMiAzMDQuOTIyIDMyQzI2My43MDMgMzIgMjU0LjE1NiA2MS4xMDkgMjQ1LjczNCA4Ni44MTJDMjE4LjA2MyAxNzEuMDk4IDE2MCAxODQuODA0IDE2MCAyMDhDMTYwIDIxNy4xMjcgMTY3LjQ1OCAyMjQgMTc2LjAxNiAyMjRDMTgwLjEwOSAyMjQgMTg0LjIwMyAyMjIuNDM4IDE4Ny4zMjggMjE5LjI5N0MyNDAuMDA0IDE2Ni4yNTYgMjU0LjM0OCAxNjMuMTg3IDI3Ni4xNDEgOTYuNzgxQzI4NS4yNjYgNjguOTUzIDI4OC4yMTkgNjQgMzA0LjkyMiA2NEMzMjUuNTc4IDY0IDMzNC44NTkgODAuNzY2IDMzNC44NTkgOTIuNjcyQzMzNC44NTkgMTAyLjc2NiAzMjUuOTY5IDEzNi42MjUgMzA4LjIzNCAxNjguMTU2QzMwNi44NjkgMTcwLjU4OCAzMDYuMTg5IDE3My4yODggMzA2LjE4OSAxNzUuOTg2QzMwNi4xODkgMTg1LjUxMiAzMTQuMDQzIDE5MiAzMjIuMTg4IDE5Mkg0NTAuNUM0NjYuNzY2IDE5MiA0ODAgMjA1LjIxOSA0ODAgMjIxLjQ2OUM0ODAgMjM2Ljc5NyA0NjcuOTIyIDI0OS42MjUgNDUyLjUxNiAyNTAuNjcyQzQ0NC4wNTQgMjUxLjI1MyA0MzcuNjEgMjU4LjMyMSA0MzcuNjEgMjY2LjYzNkM0MzcuNjEgMjc4LjgyMiA0NDkuNjcyIDI3OS40OTYgNDQ5LjY3MiAyOTcuMjY2QzQ0OS42NzIgMzExLjQwNiA0MzkuNTYyIDMyMy41NjIgNDI1LjY0MSAzMjYuMTU2QzQxOS44NjMgMzI3LjIzOCA0MTIuNTc5IDMzMi41NzMgNDEyLjU3OSAzNDEuOTA2QzQxMi41NzkgMzUwLjc5MiA0MTkuMzQ0IDM1Mi42MjQgNDE5LjM0NCAzNjUuNDY5QzQxOS4zNDQgMzk2LjQ5NCAzODcuODMgMzg3LjU4NCAzODcuODMgNDA4LjUyMkMzODcuODMgNDEyLjA0OCAzODkuMDE2IDQxMy42NTIgMzg5LjAxNiA0MTguNTMxQzM4OS4wMTYgNDM0Ljc4MSAzNzUuNzgxIDQ0OCAzNTkuNTE2IDQ0OEgzMDMuODkxQzIyMS44NzcgNDQ4IDE5NS41NSAzODMuOTc1IDE3NiAzODMuOTc1QzE2Ny4xMjggMzgzLjk3NSAxNTkuOTk5IDM5MS4yMzIgMTU5Ljk5OSAzOTkuOTk3QzE1OS45OTkgNDE2LjM0OCAyMjQuNTk0IDQ4MCAzMDMuODkxIDQ4MEgzNTkuNTE2QzM5My40MjIgNDgwIDQyMS4wMTYgNDUyLjQyMiA0MjEuMDE2IDQxOC41MzFWNDE4LjI2NkM0MzkuNTYyIDQwNy40MDYgNDUxLjM0NCAzODcuNTMxIDQ1MS4zNDQgMzY1LjQ2OUM0NTEuMzQ0IDM2MC42NzIgNDUwLjc1IDM1NS44NzUgNDQ5LjYwOSAzNTEuMjAzQzQ2OC45MjIgMzQwLjY4OCA0ODEuNjcyIDMyMC4yMzQgNDgxLjY3MiAyOTcuMjY2QzQ4MS42NzIgMjkwLjA0NyA0ODAuMzkxIDI4Mi45NTMgNDc3LjkyMiAyNzYuMjgxQzQ5OC4xNzIgMjY2LjE1NiA1MTIgMjQ1LjI1IDUxMiAyMjEuNDY5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ThumbsUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M88 192H40C17.938 192 0 209.938 0 232V440C0 462.062 17.938 480 40 480H88C110.062 480 128 462.062 128 440V232C128 209.938 110.062 192 88 192ZM96 440C96 444.406 92.406 448 88 448H40C35.594 448 32 444.406 32 440V232C32 227.594 35.594 224 40 224H88C92.406 224 96 227.594 96 232V440ZM512 221.469C512 187.578 484.406 160 450.5 160H348.031C360.016 132.938 366.859 106.516 366.859 92.672C366.859 62.844 343.688 32 304.922 32C263.703 32 254.156 61.109 245.734 86.812C218.063 171.098 160 184.804 160 208C160 217.127 167.458 224 176.016 224C180.109 224 184.203 222.438 187.328 219.297C240.004 166.256 254.348 163.187 276.141 96.781C285.266 68.953 288.219 64 304.922 64C325.578 64 334.859 80.766 334.859 92.672C334.859 102.766 325.969 136.625 308.234 168.156C306.869 170.588 306.189 173.288 306.189 175.986C306.189 185.512 314.043 192 322.188 192H450.5C466.766 192 480 205.219 480 221.469C480 236.797 467.922 249.625 452.516 250.672C444.054 251.253 437.61 258.321 437.61 266.636C437.61 278.822 449.672 279.496 449.672 297.266C449.672 311.406 439.562 323.562 425.641 326.156C419.863 327.238 412.579 332.573 412.579 341.906C412.579 350.792 419.344 352.624 419.344 365.469C419.344 396.494 387.83 387.584 387.83 408.522C387.83 412.048 389.016 413.652 389.016 418.531C389.016 434.781 375.781 448 359.516 448H303.891C221.877 448 195.55 383.975 176 383.975C167.128 383.975 159.999 391.232 159.999 399.997C159.999 416.348 224.594 480 303.891 480H359.516C393.422 480 421.016 452.422 421.016 418.531V418.266C439.562 407.406 451.344 387.531 451.344 365.469C451.344 360.672 450.75 355.875 449.609 351.203C468.922 340.688 481.672 320.234 481.672 297.266C481.672 290.047 480.391 282.953 477.922 276.281C498.172 266.156 512 245.25 512 221.469Z" />
        </Icon>
    </>
}