
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wrench` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wrench?s=thin wrench}
 * @preview ![wrench](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDcuNTk5IDEyMi43ODNDNTA1Ljc2MyAxMTUuMTQyIDQ5OC45NTEgMTEwLjcxNCA0OTEuOTY4IDExMC43MTRDNDg3LjkwNiAxMTAuNzE0IDQ4My43ODcgMTEyLjIxMiA0ODAuNTU0IDExNS40NDVMNDA0IDE5Mi4wMDFIMzIwVjEwOC4wMDJMMzk2LjU1NCAzMS40NDVDNDA1LjM0NSAyMi42NTYgNDAxLjMwNCA3LjMwNyAzODkuMjE4IDQuNDAyQzM3Ny4yODEgMS41MzMgMzY0LjgyMiAwLjAwMiAzNTIgMEMzMzkuMzc5IDAgMzI2LjQwMiAxLjQ4NCAzMTMuMjE2IDQuNjQxQzI1MS43NzEgMTkuMzQgMjAzLjg5OCA3MS41NDkgMTk0LjA1OCAxMzMuOTU3QzE4OS44MjIgMTYwLjgxNiAxOTIuMzIyIDE4Ni42NjMgMjAwLjA2IDIxMC4xMjhMMjEuMDk0IDM4OS4wOTRDLTcuMDMxIDQxNy4yMTkgLTcuMDMxIDQ2Mi43ODEgMjEuMDk0IDQ5MC45MDZDMzUuMTU2IDUwNC45NjkgNTMuNTYyIDUxMiA3MiA1MTJTMTA4Ljg0NCA1MDQuOTY5IDEyMi45MDYgNDkwLjkwNkwzMDEuODc1IDMxMS45MzhDMzM0LjY1MiAzMjIuNzQ1IDM2Mi44NTQgMzIwLjMzNiAzNzguMDQ1IDMxNy45NDJDNDQwLjQ1MyAzMDguMTAyIDQ5Mi42NiAyNjAuMjI5IDUwNy4zNjEgMTk4Ljc4NEM1MTMuNzIgMTcyLjIwNCA1MTMuMjkyIDE0Ni40NzQgNTA3LjU5OSAxMjIuNzgzWk00OTEuOCAxOTUuMDYyQzQ3OC42MDEgMjUwLjIyNiA0MzEuODg2IDI5My4yNTUgMzc1LjU1MiAzMDIuMTM4QzM2OS43MDMgMzAzLjA1OSAzNDMuODM0IDMwOC45MjggMjk3LjUyNyAyOTMuNjU3TDExMS41OTIgNDc5LjU5MkM4OS43MDkgNTAxLjQ3NSA1NC4zMTQgNTAxLjQ5OCAzMi40MDggNDc5LjU5MkMxMC41MjggNDU3LjcxNiAxMC40OTkgNDIyLjMxNiAzMi40MDggNDAwLjQwN0wyMTguMzQyIDIxNC40NzRDMjAyLjk3NCAxNjcuODc1IDIwOC42MzQgMTQ0LjI0NCAyMDkuODYzIDEzNi40NDlDMjE4Ljc0NiA4MC4xMTMgMjYxLjc3NSAzMy4zOTggMzE2LjkzOSAyMC4yMDFDMzMzLjU2NCAxNi4yMjQgMzU4Ljc3OCAxMy4yMDIgMzg1LjI0IDIwLjEzMUwzMDQgMTAxLjM3NVYyMDguMDAxSDQxMC42MjdMNDkyLjA0MiAxMjYuNTIxQzQ5Ny40MTQgMTQ4Ljg3NiA0OTcuMzMzIDE3MS45MzcgNDkxLjggMTk1LjA2MlpNODAgNDE2QzcxLjE2NCA0MTYgNjQgNDIzLjE2MiA2NCA0MzJDNjQgNDQwLjgzNiA3MS4xNjQgNDQ4IDgwIDQ0OEM4OC44MzYgNDQ4IDk2IDQ0MC44MzYgOTYgNDMyQzk2IDQyMy4xNjIgODguODM2IDQxNiA4MCA0MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Wrench(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M507.599 122.783C505.763 115.142 498.951 110.714 491.968 110.714C487.906 110.714 483.787 112.212 480.554 115.445L404 192.001H320V108.002L396.554 31.445C405.345 22.656 401.304 7.307 389.218 4.402C377.281 1.533 364.822 0.002 352 0C339.379 0 326.402 1.484 313.216 4.641C251.771 19.34 203.898 71.549 194.058 133.957C189.822 160.816 192.322 186.663 200.06 210.128L21.094 389.094C-7.031 417.219 -7.031 462.781 21.094 490.906C35.156 504.969 53.562 512 72 512S108.844 504.969 122.906 490.906L301.875 311.938C334.652 322.745 362.854 320.336 378.045 317.942C440.453 308.102 492.66 260.229 507.361 198.784C513.72 172.204 513.292 146.474 507.599 122.783ZM491.8 195.062C478.601 250.226 431.886 293.255 375.552 302.138C369.703 303.059 343.834 308.928 297.527 293.657L111.592 479.592C89.709 501.475 54.314 501.498 32.408 479.592C10.528 457.716 10.499 422.316 32.408 400.407L218.342 214.474C202.974 167.875 208.634 144.244 209.863 136.449C218.746 80.113 261.775 33.398 316.939 20.201C333.564 16.224 358.778 13.202 385.24 20.131L304 101.375V208.001H410.627L492.042 126.521C497.414 148.876 497.333 171.937 491.8 195.062ZM80 416C71.164 416 64 423.162 64 432C64 440.836 71.164 448 80 448C88.836 448 96 440.836 96 432C96 423.162 88.836 416 80 416Z" />
        </Icon>
    </>
}