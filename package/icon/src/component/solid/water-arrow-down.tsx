
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `water-arrow-down` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/water-arrow-down?s=solid water-arrow-down}
 * @preview ![water-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNy43NzUgMzgwLjQ0NUM2My4xMDQgMzc1LjgyIDgyLjQ5NCAzNjcuMTMzIDk1Ljk2MyAzNTkuMTk1QzExNS40NjMgMzcwLjcyNyAxNDcuNDMyIDM4My44MiAxOTIuMDEgMzgzLjgyQzIzNi41NTcgMzgzLjgyIDI2OC40OTQgMzcwLjc1OCAyODguMDEgMzU5LjIyN0MzMDcuNTI1IDM3MC43NTggMzM5LjQ2MyAzODMuODIgMzg0LjAxIDM4My44MkM0MjguNTg4IDM4My44MiA0NjAuNTU3IDM3MC43MjcgNDgwLjA1NyAzNTkuMTk1QzQ5My41MjUgMzY3LjEzMyA1MTIuOTE2IDM3NS44MiA1MzguMjQ0IDM4MC40NDVDNTU1LjgwNyAzODMuODIgNTcyLjMwNyAzNzIuMTAyIDU3NS40OTQgMzU0LjcyN0M1NzguNjY2IDMzNy4zNTIgNTY3LjE1IDMyMC42OTUgNTQ5Ljc3NSAzMTcuNTA4QzUxOC41NDEgMzExLjc4OSA1MDIuOTMyIDI5Ny40NDUgNTAyLjY1IDI5Ny4xOTVDNDkwLjQzMiAyODUuMDA4IDQ3MC4zMzggMjg1LjA3IDQ1Ny43NDQgMjk2LjgyQzQ1Ni43NDQgMjk3Ljc1OCA0MzIuNjA0IDMxOS44MiAzODQuMDEgMzE5LjgyUzMxMS4yNzUgMjk3Ljc1OCAzMTAuNjM1IDI5Ny4xOTVDMjk4LjQxNiAyODQuOTQ1IDI3OC4zMzggMjg1LjA3IDI2NS43NDQgMjk2LjgyQzI2NC43NDQgMjk3Ljc1OCAyNDAuNjA0IDMxOS44MiAxOTIuMDEgMzE5LjgyUzExOS4yNzUgMjk3Ljc1OCAxMTguNjM1IDI5Ny4xOTVDMTA2LjQxNiAyODQuOTQ1IDg2LjM1NCAyODUuMDM5IDczLjc0NCAyOTYuODUyQzczLjA4OCAyOTcuNDQ1IDU3LjQ3OSAzMTEuNzg5IDI2LjI0NCAzMTcuNTA4QzguODY5IDMyMC42OTUgLTIuNjQ2IDMzNy4zNTIgMC41MjUgMzU0LjcyN0MzLjcxMyAzNzIuMTAyIDIwLjMwNyAzODMuODIgMzcuNzc1IDM4MC40NDVaTTU0OS43OTUgNDQ1LjY4OEM1MTguNTYxIDQzOS45NjkgNTAyLjk1MSA0MjUuNjI1IDUwMi42NyA0MjUuMzc1QzQ5MC40NTEgNDEzLjE4OCA0NzAuMzU3IDQxMy4yNSA0NTcuNzY0IDQyNUM0NTYuNzY0IDQyNS45MzggNDMyLjYyMyA0NDggMzg0LjAyOSA0NDhTMzExLjI5NSA0MjUuOTM4IDMxMC42NTQgNDI1LjM3NUMyOTguNDM2IDQxMy4xMjUgMjc4LjM1NyA0MTMuMjUgMjY1Ljc2NCA0MjVDMjY0Ljc2NCA0MjUuOTM4IDI0MC42MjMgNDQ4IDE5Mi4wMjkgNDQ4UzExOS4yOTUgNDI1LjkzOCAxMTguNjU0IDQyNS4zNzVDMTA2LjQzNiA0MTMuMTI1IDg2LjM3MyA0MTMuMjE5IDczLjc2NCA0MjUuMDMxQzczLjEwNyA0MjUuNjI1IDU3LjQ5OCA0MzkuOTY5IDI2LjI2NCA0NDUuNjg4QzguODg5IDQ0OC44NzUgLTIuNjI3IDQ2NS41MzEgMC41NDUgNDgyLjkwNkMzLjczMiA1MDAuMjgxIDIwLjMyNiA1MTIgMzcuNzk1IDUwOC42MjVDNjMuMTIzIDUwNCA4Mi41MTQgNDk1LjMxMiA5NS45ODIgNDg3LjM3NUMxMTUuNDgyIDQ5OC45MDYgMTQ3LjQ1MSA1MTIgMTkyLjAyOSA1MTJDMjM2LjU3NiA1MTIgMjY4LjUxNCA0OTguOTM4IDI4OC4wMjkgNDg3LjQwNkMzMDcuNTQ1IDQ5OC45MzggMzM5LjQ4MiA1MTIgMzg0LjAyOSA1MTJDNDI4LjYwNyA1MTIgNDYwLjU3NiA0OTguOTA2IDQ4MC4wNzYgNDg3LjM3NUM0OTMuNTQ1IDQ5NS4zMTMgNTEyLjkzNiA1MDQgNTM4LjI2NCA1MDguNjI1QzU1NS44MjYgNTEyIDU3Mi4zMjYgNTAwLjI4MSA1NzUuNTE0IDQ4Mi45MDZDNTc4LjY4NiA0NjUuNTMxIDU2Ny4xNyA0NDguODc1IDU0OS43OTUgNDQ1LjY4OFpNMjY4LjAzNSAyMTdDMjY5LjQ5NCAyMTguMTYyIDI3MS4yMDEgMjE4Ljc0NiAyNzIuNzk1IDIxOS42MjFDMjc0LjA2MSAyMjAuMzIyIDI3NS4xOCAyMjEuMTU2IDI3Ni41NDMgMjIxLjY4NEMyODAuMjQ4IDIyMy4xMTMgMjg0LjEwMiAyMjQgMjg4LjAyIDIyNFMyOTUuNzkxIDIyMy4xMTMgMjk5LjQ5NiAyMjEuNjg0QzMwMC44NTkgMjIxLjE1NiAzMDEuOTc5IDIyMC4zMjIgMzAzLjI0NCAyMTkuNjIxQzMwNC44MzggMjE4Ljc0NiAzMDYuNTQ1IDIxOC4xNjIgMzA4LjAwNCAyMTdMMzg4LjAwNCAxNTNDNDAxLjgxNiAxNDEuOTM4IDQwNC4wNTEgMTIxLjgxMiAzOTMuMDA0IDEwOEMzODEuOTg4IDk0LjE4OCAzNjEuODE2IDkxLjk2OSAzNDguMDM1IDEwM0wzMjAuMDIgMTI1LjQyMlYzMkMzMjAuMDIgMTQuMzEyIDMwNS42OTEgMCAyODguMDIgMFMyNTYuMDIgMTQuMzEyIDI1Ni4wMiAzMlYxMjUuNDIyTDIyOC4wMDQgMTAzQzIxNC4yMzggOTEuOTY5IDE5NC4wODIgOTQuMjUgMTgzLjAzNSAxMDhDMTcxLjk4OCAxMjEuODEyIDE3NC4yMjMgMTQxLjkzOCAxODguMDM1IDE1M0wyNjguMDM1IDIxN1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WaterArrowDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M37.775 380.445C63.104 375.82 82.494 367.133 95.963 359.195C115.463 370.727 147.432 383.82 192.01 383.82C236.557 383.82 268.494 370.758 288.01 359.227C307.525 370.758 339.463 383.82 384.01 383.82C428.588 383.82 460.557 370.727 480.057 359.195C493.525 367.133 512.916 375.82 538.244 380.445C555.807 383.82 572.307 372.102 575.494 354.727C578.666 337.352 567.15 320.695 549.775 317.508C518.541 311.789 502.932 297.445 502.65 297.195C490.432 285.008 470.338 285.07 457.744 296.82C456.744 297.758 432.604 319.82 384.01 319.82S311.275 297.758 310.635 297.195C298.416 284.945 278.338 285.07 265.744 296.82C264.744 297.758 240.604 319.82 192.01 319.82S119.275 297.758 118.635 297.195C106.416 284.945 86.354 285.039 73.744 296.852C73.088 297.445 57.479 311.789 26.244 317.508C8.869 320.695 -2.646 337.352 0.525 354.727C3.713 372.102 20.307 383.82 37.775 380.445ZM549.795 445.688C518.561 439.969 502.951 425.625 502.67 425.375C490.451 413.188 470.357 413.25 457.764 425C456.764 425.938 432.623 448 384.029 448S311.295 425.938 310.654 425.375C298.436 413.125 278.357 413.25 265.764 425C264.764 425.938 240.623 448 192.029 448S119.295 425.938 118.654 425.375C106.436 413.125 86.373 413.219 73.764 425.031C73.107 425.625 57.498 439.969 26.264 445.688C8.889 448.875 -2.627 465.531 0.545 482.906C3.732 500.281 20.326 512 37.795 508.625C63.123 504 82.514 495.312 95.982 487.375C115.482 498.906 147.451 512 192.029 512C236.576 512 268.514 498.938 288.029 487.406C307.545 498.938 339.482 512 384.029 512C428.607 512 460.576 498.906 480.076 487.375C493.545 495.313 512.936 504 538.264 508.625C555.826 512 572.326 500.281 575.514 482.906C578.686 465.531 567.17 448.875 549.795 445.688ZM268.035 217C269.494 218.162 271.201 218.746 272.795 219.621C274.061 220.322 275.18 221.156 276.543 221.684C280.248 223.113 284.102 224 288.02 224S295.791 223.113 299.496 221.684C300.859 221.156 301.979 220.322 303.244 219.621C304.838 218.746 306.545 218.162 308.004 217L388.004 153C401.816 141.938 404.051 121.812 393.004 108C381.988 94.188 361.816 91.969 348.035 103L320.02 125.422V32C320.02 14.312 305.691 0 288.02 0S256.02 14.312 256.02 32V125.422L228.004 103C214.238 91.969 194.082 94.25 183.035 108C171.988 121.812 174.223 141.938 188.035 153L268.035 217Z" />
        </Icon>
    </>
}