
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person-walking-with-cane` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-walking-with-cane?s=regular person-walking-with-cane}
 * @preview ![person-walking-with-cane](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDMuOTg5IDk1Ljk5OEgxNDQuMDI4QzE3MC41MzIgOTUuOTg2IDE5Mi4wMDggNzQuNTA0IDE5Mi4wMDggNDhDMTkyLjAwOCAyMS40OSAxNzAuNTE4IDAgMTQ0LjAwOCAwQzExNy41IDAgOTYuMDEgMjEuNDkgOTYuMDEgNDhDOTYuMDEgNzQuNTA0IDExNy40ODcgOTUuOTg2IDE0My45ODkgOTUuOTk4Wk05Mi4xOSAzNzIuMzMyTDY0LjcyOSA0ODIuMTcyQzYxLjUxIDQ5NS4wMzEgNjkuMzIzIDUwOC4wNjIgODIuMTk4IDUxMS4yODFDODQuMTM1IDUxMS43NjYgODYuMTA0IDUxMiA4OC4wNDEgNTEyQzk4Ljc5MSA1MTIgMTA4LjU3MyA1MDQuNzE5IDExMS4yOTEgNDkzLjgyOEwxMzguMzcxIDM4NS40OThMOTUuNTQ5IDM0OC43ODlDOTUuMDgyIDM1Ni43MjEgOTQuMTE4IDM2NC42MTUgOTIuMTkgMzcyLjMzMlpNMzE1LjQ3MyAyODEuOTUxTDIzMC42MzEgMTY0LjQ4MkMyMTQuMDgyIDE0MS41NyAxODcuNTM5IDEyNy45OTggMTU5LjI3NiAxMjcuOTk4SDEzNS41NzFDMTAyLjIzMyAxMjcuOTk4IDcxLjc1NiAxNDYuODM0IDU2Ljg0OCAxNzYuNjU0TDIuNTQzIDI4NS4yNjRDLTMuMzk0IDI5Ny4xMjMgMS40MTggMzExLjUyOSAxMy4yOTMgMzE3LjQ2N0MxNi43MzEgMzE5LjE4NiAyMC4zODcgMzE5Ljk5OCAyMy45ODEgMzE5Ljk5OEMzMi43OTMgMzE5Ljk5OCA0MS4yNjIgMzE1LjEzOSA0NS40ODEgMzA2LjczMkw5Ni4wMSAyMDUuNjdWMjkyLjMyQzk2LjAxIDMwMS42NjIgMTAwLjA5MiAzMTAuNTM3IDEwNy4xODQgMzE2LjYxN0wyMDUuNDQ0IDQwMC44NDRDMjA3LjA2OSA0MDIuMjM0IDIwOC4wMDYgNDAzLjg0NCAyMDguMDA2IDQwNS4yNVY0ODhDMjA4LjAwNiA1MDEuMjUgMjE4Ljc1NiA1MTIgMjMyLjAwNiA1MTJTMjU2LjAwNiA1MDEuMjUgMjU2LjAwNiA0ODhWNDA1LjI1QzI1Ni4wMDYgMzg5LjgxMiAyNDguOTc1IDM3NC45MiAyMzYuNjk0IDM2NC40MDRMMTkyLjAwOCAzMjYuMTA1VjE5My4wMUwyNzYuNTM3IDMxMC4wNDVDMjg0LjM0OCAzMjAuNzQ4IDI5OS4yODYgMzIzLjI5NSAzMTAuMDY3IDMxNS40NTFDMzIwLjgxNyAzMDcuNjg2IDMyMy4yMjMgMjkyLjY4NiAzMTUuNDczIDI4MS45NTFaTTQ0NS4yMjMgNDg2Ljk2OUwzMjkuODM4IDMxNy4xNjJDMzI3LjE4NiAzMjEuNDEyIDMyMy43OCAzMjUuMjgzIDMxOS40ODEgMzI4LjM4OUMzMTQuNjEyIDMzMS45MzIgMzA5LjAxNiAzMzMuODIgMzAzLjIxNyAzMzQuODkxTDQxOC43ODcgNTA0Ljk2OUM0MjEuODgxIDUwOS41MTYgNDI2LjkxMSA1MTEuOTY5IDQzMi4wMDQgNTExLjk2OUM0MzUuMTI5IDUxMS45NjkgNDM4LjI1NCA1MTEuMDc4IDQ0MS4wMDQgNTA5LjIwM0M0NDguMzE3IDUwNC4yMzQgNDUwLjE5MiA0OTQuMjgxIDQ0NS4yMjMgNDg2Ljk2OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PersonWalkingWithCane(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M143.989 95.998H144.028C170.532 95.986 192.008 74.504 192.008 48C192.008 21.49 170.518 0 144.008 0C117.5 0 96.01 21.49 96.01 48C96.01 74.504 117.487 95.986 143.989 95.998ZM92.19 372.332L64.729 482.172C61.51 495.031 69.323 508.062 82.198 511.281C84.135 511.766 86.104 512 88.041 512C98.791 512 108.573 504.719 111.291 493.828L138.371 385.498L95.549 348.789C95.082 356.721 94.118 364.615 92.19 372.332ZM315.473 281.951L230.631 164.482C214.082 141.57 187.539 127.998 159.276 127.998H135.571C102.233 127.998 71.756 146.834 56.848 176.654L2.543 285.264C-3.394 297.123 1.418 311.529 13.293 317.467C16.731 319.186 20.387 319.998 23.981 319.998C32.793 319.998 41.262 315.139 45.481 306.732L96.01 205.67V292.32C96.01 301.662 100.092 310.537 107.184 316.617L205.444 400.844C207.069 402.234 208.006 403.844 208.006 405.25V488C208.006 501.25 218.756 512 232.006 512S256.006 501.25 256.006 488V405.25C256.006 389.812 248.975 374.92 236.694 364.404L192.008 326.105V193.01L276.537 310.045C284.348 320.748 299.286 323.295 310.067 315.451C320.817 307.686 323.223 292.686 315.473 281.951ZM445.223 486.969L329.838 317.162C327.186 321.412 323.78 325.283 319.481 328.389C314.612 331.932 309.016 333.82 303.217 334.891L418.787 504.969C421.881 509.516 426.911 511.969 432.004 511.969C435.129 511.969 438.254 511.078 441.004 509.203C448.317 504.234 450.192 494.281 445.223 486.969Z" />
        </Icon>
    </>
}