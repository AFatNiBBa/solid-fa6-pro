
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `seal-exclamation` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/seal-exclamation?s=light seal-exclamation}
 * @preview ![seal-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTMuMjM1IDIyMi4wNTlMNDQ3LjY0NyAxNzYuNDcxVjExMkM0NDcuNjQ3IDg1LjQ5IDQyNi4xNTcgNjQgMzk5LjY0NyA2NEgzMzUuMTc3TDI4OS41ODkgMTguNDEyQzI4MC4yMTYgOS4wMzkgMjY3LjkzMyA0LjM1NCAyNTUuNjQ3IDQuMzU0QzI0My4zNjQgNC4zNTQgMjMxLjA3OSA5LjAzOSAyMjEuNzA2IDE4LjQxMkwxNzYuMTE4IDY0SDExMS42NDdDODUuMTM4IDY0IDYzLjY0NyA4NS40OSA2My42NDcgMTEyVjE3Ni40NzFMMTguMDYgMjIyLjA1OUMtMC42ODcgMjQwLjgwMyAtMC42ODcgMjcxLjE5NSAxOC4wNiAyODkuOTQxTDYzLjY0NyAzMzUuNTI5VjQwMEM2My42NDcgNDI2LjUxIDg1LjEzOCA0NDggMTExLjY0NyA0NDhIMTc2LjExOEwyMjEuNzA2IDQ5My41ODhDMjMxLjA3OSA1MDIuOTU5IDI0My4zNjQgNTA3LjY0NiAyNTUuNjQ3IDUwNy42NDZDMjY3LjkzMyA1MDcuNjQ2IDI4MC4yMTYgNTAyLjk1OSAyODkuNTg5IDQ5My41ODhMMzM1LjE3NyA0NDhIMzk5LjY0N0M0MjYuMTU3IDQ0OCA0NDcuNjQ3IDQyNi41MSA0NDcuNjQ3IDQwMFYzMzUuNTI5TDQ5My4yMzUgMjg5Ljk0MUM1MTEuOTgxIDI3MS4xOTUgNTExLjk4MSAyNDAuODAzIDQ5My4yMzUgMjIyLjA1OVpNNDcwLjYwOCAyNjcuMzE0TDQxNS42NDcgMzIyLjI3NVY0MDBDNDE1LjY0NyA0MDguODIyIDQwOC40NyA0MTYgMzk5LjY0NyA0MTZIMzIxLjkyM0wyNjYuOTYyIDQ3MC45NTlDMjYyLjg4NCA0NzUuMDM3IDI1OC4xMjIgNDc1LjY0NiAyNTUuNjQ3IDQ3NS42NDZTMjQ4LjQxMSA0NzUuMDM3IDI0NC4zMzMgNDcwLjk1OUwxODkuMzcyIDQxNkgxMTEuNjQ3QzEwMi44MjUgNDE2IDk1LjY0NyA0MDguODIyIDk1LjY0NyA0MDBWMzIyLjI3NUw0MC42ODcgMjY3LjMxNEMzNi42MDggMjYzLjIzNiAzNS45OTkgMjU4LjQ3NSAzNS45OTkgMjU2UzM2LjYwOCAyNDguNzY0IDQwLjY4NyAyNDQuNjg4TDk1LjY0NyAxODkuNzI3VjExMkM5NS42NDcgMTAzLjE3OCAxMDIuODI1IDk2IDExMS42NDcgOTZIMTg5LjM3MkwyNDQuMzMzIDQxLjA0MUMyNDguNDExIDM2Ljk2MSAyNTMuMTczIDM2LjM1NCAyNTUuNjQ3IDM2LjM1NFMyNjIuODg0IDM2Ljk2MSAyNjYuOTYyIDQxLjA0MUwzMjEuOTIzIDk2SDM5OS42NDdDNDA4LjQ3IDk2IDQxNS42NDcgMTAzLjE3OCA0MTUuNjQ3IDExMlYxODkuNzI3TDQyNS4wMjEgMTk5LjFMNDcwLjYxIDI0NC42ODhDNDc0LjY4NyAyNDguNzY0IDQ3NS4yOTYgMjUzLjUyNSA0NzUuMjk2IDI1NlM0NzQuNjg3IDI2My4yMzYgNDcwLjYwOCAyNjcuMzE0Wk0yNTUuNjQ3IDMwNEMyNjQuNDkxIDMwNCAyNzEuNjQ3IDI5Ni44NDQgMjcxLjY0NyAyODhWMTI4QzI3MS42NDcgMTE5LjE1NiAyNjQuNDkxIDExMiAyNTUuNjQ3IDExMlMyMzkuNjQ3IDExOS4xNTYgMjM5LjY0NyAxMjhWMjg4QzIzOS42NDcgMjk2Ljg0NCAyNDYuODA0IDMwNCAyNTUuNjQ3IDMwNFpNMjU1LjY0NyAzNDRDMjQyLjM5NCAzNDQgMjMxLjY0NyAzNTQuNzQ2IDIzMS42NDcgMzY4UzI0Mi4zOTQgMzkyIDI1NS42NDcgMzkyUzI3OS42NDcgMzgxLjI1NCAyNzkuNjQ3IDM2OFMyNjguOTAxIDM0NCAyNTUuNjQ3IDM0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SealExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M493.235 222.059L447.647 176.471V112C447.647 85.49 426.157 64 399.647 64H335.177L289.589 18.412C280.216 9.039 267.933 4.354 255.647 4.354C243.364 4.354 231.079 9.039 221.706 18.412L176.118 64H111.647C85.138 64 63.647 85.49 63.647 112V176.471L18.06 222.059C-0.687 240.803 -0.687 271.195 18.06 289.941L63.647 335.529V400C63.647 426.51 85.138 448 111.647 448H176.118L221.706 493.588C231.079 502.959 243.364 507.646 255.647 507.646C267.933 507.646 280.216 502.959 289.589 493.588L335.177 448H399.647C426.157 448 447.647 426.51 447.647 400V335.529L493.235 289.941C511.981 271.195 511.981 240.803 493.235 222.059ZM470.608 267.314L415.647 322.275V400C415.647 408.822 408.47 416 399.647 416H321.923L266.962 470.959C262.884 475.037 258.122 475.646 255.647 475.646S248.411 475.037 244.333 470.959L189.372 416H111.647C102.825 416 95.647 408.822 95.647 400V322.275L40.687 267.314C36.608 263.236 35.999 258.475 35.999 256S36.608 248.764 40.687 244.688L95.647 189.727V112C95.647 103.178 102.825 96 111.647 96H189.372L244.333 41.041C248.411 36.961 253.173 36.354 255.647 36.354S262.884 36.961 266.962 41.041L321.923 96H399.647C408.47 96 415.647 103.178 415.647 112V189.727L425.021 199.1L470.61 244.688C474.687 248.764 475.296 253.525 475.296 256S474.687 263.236 470.608 267.314ZM255.647 304C264.491 304 271.647 296.844 271.647 288V128C271.647 119.156 264.491 112 255.647 112S239.647 119.156 239.647 128V288C239.647 296.844 246.804 304 255.647 304ZM255.647 344C242.394 344 231.647 354.746 231.647 368S242.394 392 255.647 392S279.647 381.254 279.647 368S268.901 344 255.647 344Z" />
        </Icon>
    </>
}