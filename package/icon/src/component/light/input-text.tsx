
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `input-text` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/input-text?s=light input-text}
 * @preview ![input-text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYuMDAyIDY0SDYzLjk5OEMyOC42NTQgNjQgMCA5Mi42NTIgMCAxMjhWMzg0QzAgNDE5LjM0NiAyOC42NTQgNDQ4IDYzLjk5OCA0NDhINTc2LjAwMkM2MTEuMzQ2IDQ0OCA2NDAgNDE5LjM0OCA2NDAgMzg0VjEyOEM2NDAgOTIuNjU0IDYxMS4zNDYgNjQgNTc2LjAwMiA2NFpNNjA4IDM4NEM2MDggNDAxLjY0NSA1OTMuNjQ2IDQxNiA1NzYuMDAyIDQxNkg2My45OThDNDYuMzU0IDQxNiAzMiA0MDEuNjQ1IDMyIDM4NFYxMjhDMzIgMTEwLjM1NSA0Ni4zNTQgOTYgNjMuOTk4IDk2SDU3Ni4wMDJDNTkzLjY0NiA5NiA2MDggMTEwLjM1NSA2MDggMTI4VjM4NFpNNDA1LjU5NCAyNDguNDg0QzQxMi4xNTYgMjM5LjMxMiA0MTYgMjI4LjA5NCA0MTYgMjE2QzQxNiAxODUuMTI1IDM5MC44NzUgMTYwIDM2MCAxNjBIMzA0QzI5NS4xNTYgMTYwIDI4OCAxNjcuMTU2IDI4OCAxNzZWMzM2QzI4OCAzNDQuODQ0IDI5NS4xNTYgMzUyIDMwNCAzNTJIMzc2QzQwNi44NzUgMzUyIDQzMiAzMjYuODc1IDQzMiAyOTZDNDMyIDI3NS45ODQgNDIxLjQzOCAyNTguMzc1IDQwNS41OTQgMjQ4LjQ4NFpNMzIwIDE5MkgzNjBDMzczLjIxOSAxOTIgMzg0IDIwMi43NjYgMzg0IDIxNlMzNzMuMjE5IDI0MCAzNjAgMjQwSDMyMFYxOTJaTTM3NiAzMjBIMzIwVjI3MkgzNzZDMzg5LjIxOSAyNzIgNDAwIDI4Mi43NjYgNDAwIDI5NkM0MDAgMzA5LjIxOSAzODkuMjE5IDMyMCAzNzYgMzIwWk0xOTAuODQ0IDE3MC4wNjJDMTg2LjAzMSAxNTcuOTA2IDE2NS45NjkgMTU3LjkwNiAxNjEuMTU2IDE3MC4wNjJMOTcuMTU2IDMzMC4wNjJDOTMuODc1IDMzOC4yNSA5Ny44NDQgMzQ3LjU2MiAxMDYuMDYyIDM1MC44NDRDMTE0LjI4MSAzNTQuMTU2IDEyMy41NjIgMzUwLjEyNSAxMjYuODQ0IDM0MS45MzhMMTQyLjE3IDMwMy42MzFDMTQyLjc5OSAzMDMuNzA1IDE0My4zNTIgMzA0IDE0NCAzMDRIMjA4QzIwOC42NDggMzA0IDIwOS4yMDEgMzAzLjcwNSAyMDkuODMgMzAzLjYzMUwyMjUuMTU2IDM0MS45MzhDMjI3LjY1NiAzNDguMTg4IDIzMy42NTYgMzUyIDI0MCAzNTJDMjQxLjk2OSAzNTIgMjQ0IDM1MS42MjUgMjQ1LjkzOCAzNTAuODQ0QzI1NC4xNTYgMzQ3LjU2MiAyNTguMTI1IDMzOC4yNSAyNTQuODQ0IDMzMC4wNjJMMTkwLjg0NCAxNzAuMDYyWk0xNTQuODI2IDI3MkwxNzYgMjE5LjA3OEwxOTcuMTc0IDI3MkgxNTQuODI2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function InputText(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M576.002 64H63.998C28.654 64 0 92.652 0 128V384C0 419.346 28.654 448 63.998 448H576.002C611.346 448 640 419.348 640 384V128C640 92.654 611.346 64 576.002 64ZM608 384C608 401.645 593.646 416 576.002 416H63.998C46.354 416 32 401.645 32 384V128C32 110.355 46.354 96 63.998 96H576.002C593.646 96 608 110.355 608 128V384ZM405.594 248.484C412.156 239.312 416 228.094 416 216C416 185.125 390.875 160 360 160H304C295.156 160 288 167.156 288 176V336C288 344.844 295.156 352 304 352H376C406.875 352 432 326.875 432 296C432 275.984 421.438 258.375 405.594 248.484ZM320 192H360C373.219 192 384 202.766 384 216S373.219 240 360 240H320V192ZM376 320H320V272H376C389.219 272 400 282.766 400 296C400 309.219 389.219 320 376 320ZM190.844 170.062C186.031 157.906 165.969 157.906 161.156 170.062L97.156 330.062C93.875 338.25 97.844 347.562 106.062 350.844C114.281 354.156 123.562 350.125 126.844 341.938L142.17 303.631C142.799 303.705 143.352 304 144 304H208C208.648 304 209.201 303.705 209.83 303.631L225.156 341.938C227.656 348.188 233.656 352 240 352C241.969 352 244 351.625 245.938 350.844C254.156 347.562 258.125 338.25 254.844 330.062L190.844 170.062ZM154.826 272L176 219.078L197.174 272H154.826Z" />
        </Icon>
    </>
}