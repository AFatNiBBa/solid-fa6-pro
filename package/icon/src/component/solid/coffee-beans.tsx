
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `coffee-beans` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-beans?s=solid coffee-beans}
 * @preview ![coffee-beans](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDMuMTkxIDM0NC4yNDNDMTY3LjI1MiA0MDIuNzY2IDE2My4zODkgNDUzLjc1NyAxNTcuMTU2IDQ4NC43OEMxNTQuNDMyIDQ5OC4zNDQgMTY4LjM4MyA1MDguMzYyIDE4MC41ODggNTAyLjE5OEMyMzAuODE2IDQ3Ni44MjkgMjU2LjAwNCA0MTQuMTE0IDI1Ni4wMDQgMzUxLjkwMUMyNTYuMDA0IDI3OC41MDUgMjIwLjk2MyAyMDYuMjEyIDE1MS4wODQgMTkyLjI3NkMxNDMuMDI1IDE5MC42NzEgMTM1LjI0IDE5Ni4yNTEgMTMzLjE1MiAyMDQuMzE3QzEyNi4zODEgMjMwLjQ4MyAxMTcuODgzIDI4Mi43NjggMTQzLjE5MSAzNDQuMjQzWk0wIDM1Mi40NjZDMCA0MjUuMDg1IDM0LjI4MSA0OTYuNjYzIDEwMi42ODYgNTExLjY3MUMxMTAuNjY0IDUxMy40MjEgMTE4LjQ3NyA1MDguMDE0IDEyMC43NzUgNTAwLjA1OUMxMjguNTggNDczLjA0OSAxMzkuNzY4IDQxOC4wNTUgMTEyLjgxNiAzNTIuNDU0Qzk1LjE0MyAzMDkuNDI2IDkwLjA4OCAyNjMuOTgzIDk3LjY0MSAyMTkuMzg1Qzk5Ljg5MyAyMDYuMDg5IDg1Ljc1OCAxOTYuNzIxIDczLjk1NSAyMDIuOTExQzI0LjY5OSAyMjguNzUzIDAgMjkwLjg1NCAwIDM1Mi40NjZaTTI4MC41NzggMjMxLjk0OEMzMzAuMjg3IDI4MS43NDMgNDAyLjc1NCAzMDcuMzE3IDQ1OS44NTIgMjcwLjcwNEM0NjYuNTEgMjY2LjQzMiA0NjguMTU2IDI1Ny4zNjggNDY0LjI4NyAyNTAuMzM3QzQ1MS4xNDEgMjI2LjQ2NiA0MjEuMTUyIDE4MS4wODUgMzU3Ljc5NyAxNTQuNTgzQzMxNi4yNDQgMTM3LjE5OCAyODEuNjc4IDEwOS41MDEgMjU2LjMxOCA3My43NDNDMjQ4Ljc1OCA2My4wODEgMjMyLjY3IDY2LjM1IDIyOC44MjggNzguNjg4QzIxMi44MDEgMTMwLjE4MiAyMzguNDAyIDE4OS43IDI4MC41NzggMjMxLjk0OFpNNDc4LjczIDIxNC45MTNDNDg2LjE1IDIyNi4wODMgNTAyLjU1NyAyMjMuMzg1IDUwNi42OTMgMjEwLjc5QzUyMy43MDkgMTU4Ljk1NCA0OTguMDIyIDk4LjY3OCA0NTUuNDM0IDU2LjAxOEM0MDUuMTkxIDUuNjkyIDMzMS43MTkgLTE5Ljg1MyAyNzQuMzQ2IDE4LjUwOEMyNjcuNzI5IDIyLjkzMiAyNjYuMjIxIDMyLjA5OCAyNzAuMzEyIDM5LjA1OUMyODMuNTkgNjEuNjQ1IDMxMy41NjIgMTAzLjMyMyAzNzIuOTY3IDEyOC4xMjRDNDI5LjUgMTUxLjc1NSA0NjEuNzYgMTg5LjM2OCA0NzguNzMgMjE0LjkxM1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CoffeeBeans(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M143.191 344.243C167.252 402.766 163.389 453.757 157.156 484.78C154.432 498.344 168.383 508.362 180.588 502.198C230.816 476.829 256.004 414.114 256.004 351.901C256.004 278.505 220.963 206.212 151.084 192.276C143.025 190.671 135.24 196.251 133.152 204.317C126.381 230.483 117.883 282.768 143.191 344.243ZM0 352.466C0 425.085 34.281 496.663 102.686 511.671C110.664 513.421 118.477 508.014 120.775 500.059C128.58 473.049 139.768 418.055 112.816 352.454C95.143 309.426 90.088 263.983 97.641 219.385C99.893 206.089 85.758 196.721 73.955 202.911C24.699 228.753 0 290.854 0 352.466ZM280.578 231.948C330.287 281.743 402.754 307.317 459.852 270.704C466.51 266.432 468.156 257.368 464.287 250.337C451.141 226.466 421.152 181.085 357.797 154.583C316.244 137.198 281.678 109.501 256.318 73.743C248.758 63.081 232.67 66.35 228.828 78.688C212.801 130.182 238.402 189.7 280.578 231.948ZM478.73 214.913C486.15 226.083 502.557 223.385 506.693 210.79C523.709 158.954 498.022 98.678 455.434 56.018C405.191 5.692 331.719 -19.853 274.346 18.508C267.729 22.932 266.221 32.098 270.312 39.059C283.59 61.645 313.562 103.323 372.967 128.124C429.5 151.755 461.76 189.368 478.73 214.913Z" />
        </Icon>
    </>
}