
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `flag-checkered` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flag-checkered?s=thin flag-checkered}
 * @preview ![flag-checkered](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTguNTI5IDYuMjNDNDkxLjcxNyAyLjA5OCA0ODQuMjU4IDAgNDc2LjM2NyAwQzQ2OS43MyAwIDQ2My4wMDggMS40NjUgNDU2LjkyOCA0LjIzOEM0MTUuMTY0IDIzLjMwMSAzODAuODk4IDMyLjE4IDM0OS4wOTIgMzIuMThDMzIwLjEzMSAzMi4xOCAyOTcuMzMyIDI0Ljg0OCAyNzMuMTk1IDE3LjA4NkMyNDcuNSA4LjgzNiAyMjAuOTU3IDAuMzE2IDE4NS4yMTEgMC4zMTJDMTU3LjA4NCAwLjMxMiAxMTkuNzMyIDMuMjg5IDMyIDM4LjgzNkwxNiA0NS4zMlY4QzE2IDMuNTgyIDEyLjQxOCAwIDggMFMwIDMuNTgyIDAgOFY1MDRDMCA1MDguNDA2IDMuNTk0IDUxMiA4IDUxMlMxNiA1MDguNDA2IDE2IDUwNFYzOTguMjE5TDIyLjUwOCAzOTUuMzJMMzIuMDAyIDM5MS4wOTRMMzYuNjgyIDM4OC45NDFDNTYuMzA1IDM3OS44MiAxMTUuODEyIDM1Mi4xNjQgMTgwLjg0NCAzNTIuMTY0QzIxNy42ODcgMzUyLjE2NCAyNDguMDAyIDM1OS44NzkgMjgwLjA5NiAzNjguMDQ3QzMxMC44MiAzNzUuODYzIDM0Mi41ODYgMzgzLjk0NSAzNzkuNCAzODMuOTQ1QzQxNC44NjEgMzgzLjk0NSA0NTEuNDg2IDM3Ni4zOTEgNDkxLjM2NSAzNjAuODQ4QzUwMy43MzIgMzU2LjA0MyA1MTEuNzM4IDM0NC4zNTIgNTExLjc1IDMzMS4wN0w1MTIgMzIuMzUyQzUxMi4wMDggMjEuMjgxIDUwNi44NDYgMTEuMjczIDQ5OC41MjkgNi4yM1pNNDk1LjgwNyAyNjIuOTg0QzQ1Ny4yMTUgMjc2Ljg0NCA0MjEuNTY0IDI4My43ODEgMzg3LjE3MiAyODMuNzgxQzM4Ni4wODIgMjgzLjc4MSAzODUuMDgyIDI4My42MzcgMzg0IDI4My42MjVWMjE1LjYyNUMzODUuMDg2IDIxNS42MzcgMzg2LjA3OCAyMTUuNzgxIDM4Ny4xNzIgMjE1Ljc4MUM0MjEuODExIDIxNS43ODEgNDU3LjU2MSAyMDkuMDA4IDQ5NS44NjMgMTk1LjgxMkw0OTUuODA3IDI2Mi45ODRaTTI1NiAxNzcuMjQyQzIzMi4xNDUgMTcyLjAwOCAyMDcuOTI0IDE2OCAxODAgMTY4QzE2Ny43MTcgMTY4IDE1NS43NTQgMTY5LjEwMiAxNDQgMTcwLjYwOVYxMDIuNzU0QzE1NS43NiAxMDEuMTU2IDE2Ny43MzYgMTAwIDE4MCAxMDBDMjA3LjYzNSAxMDAgMjMxLjgzMiAxMDQuMTY0IDI1NiAxMDkuNTg2VjE3Ny4yNDJaTTI3MiAxMTMuMzQ0QzI3NS4yODkgMTE0LjEzNyAyNzguNTM3IDExNC44NzkgMjgxLjg1OSAxMTUuNjg4QzMwOC44NSAxMjIuMjYyIDMzNi44MTQgMTI4Ljc0MiAzNjggMTMwLjgzNlYxOTguODJDMzM4LjQ5MiAxOTYuNzI3IDMxMS41NzQgMTkwLjQ3MyAyODUuMzI4IDE4NC4wNjJDMjgwLjg1IDE4Mi45NzMgMjc2LjQzNiAxODEuOTUzIDI3MiAxODAuODk4VjExMy4zNDRaTTEyOCAxNzIuODUyQzgwLjAyNyAxODEuNDQ5IDM5LjI2MiAxOTkuNDA2IDE2IDIwOS43OTdWMTQzLjI3TDIxLjAxNiAxNDEuMDYzQzQyLjg4MyAxMzEuMjk3IDgyLjE3IDExMy44NTIgMTI4IDEwNS4xOTVWMTcyLjg1MlpNMTYgMjI3LjI3TDIxLjAxNiAyMjUuMDYzQzQyLjg4MyAyMTUuMjk3IDgyLjE3IDE5Ny44NTIgMTI4IDE4OS4xOTVWMjU2Ljg1MkM4MC4wMjcgMjY1LjQ0OSAzOS4yNjIgMjgzLjQwNiAxNiAyOTMuNzk3VjIyNy4yN1pNMTQ0IDE4Ni43NTRDMTU1Ljc2IDE4NS4xNTYgMTY3LjczNiAxODQgMTgwIDE4NEMyMDcuNjM1IDE4NCAyMzEuODMyIDE4OC4xNjQgMjU2IDE5My41ODZWMjYxLjI0MkMyMzIuMTQ1IDI1Ni4wMDggMjA3LjkyNCAyNTIgMTgwIDI1MkMxNjcuNzE3IDI1MiAxNTUuNzU0IDI1My4xMDIgMTQ0IDI1NC42MDlWMTg2Ljc1NFpNMjcyIDE5Ny4zNDRDMjc1LjI4OSAxOTguMTM3IDI3OC41MzcgMTk4Ljg3OSAyODEuODU5IDE5OS42ODhDMzA4Ljg1IDIwNi4yNjIgMzM2LjgxNCAyMTIuNzQyIDM2OCAyMTQuODM2VjI4Mi44MkMzMzguNDkyIDI4MC43MjcgMzExLjU3NCAyNzQuNDczIDI4NS4zMjggMjY4LjA2MkMyODAuODUgMjY2Ljk3MyAyNzYuNDM2IDI2NS45NTMgMjcyIDI2NC44OThWMTk3LjM0NFpNNDk1Ljg3NyAxNzguOTYxQzQ1Ny4yNTggMTkyLjgzMiA0MjEuNTg2IDE5OS43ODEgMzg3LjE3MiAxOTkuNzgxQzM4Ni4wODIgMTk5Ljc4MSAzODUuMDgyIDE5OS42MzcgMzg0IDE5OS42MjVWMTMxLjYyNUMzODUuMDg2IDEzMS42MzcgMzg2LjA3OCAxMzEuNzgxIDM4Ny4xNzIgMTMxLjc4MUM0MjEuODMyIDEzMS43ODEgNDU3LjYwNSAxMjUgNDk1LjkzNCAxMTEuNzg5TDQ5NS44NzcgMTc4Ljk2MVpNNDYzLjU2NiAxOC43OTdDNDY3LjUyMyAxNi45OTIgNDcyLjA3IDE2IDQ3Ni4zNjcgMTZDNDgxLjM2MSAxNiA0ODUuODk2IDE3LjI4MSA0OTAuMjM2IDE5LjkxNEM0OTMuNzQyIDIyLjAzOSA0OTYuMDA0IDI2LjkxOCA0OTYgMzIuMzRMNDk1Ljk0NyA5NC45MzhDNDU3LjI5OSAxMDguODI4IDQyMS42MDcgMTE1Ljc4MSAzODcuMTcyIDExNS43ODFDMzg2LjA4MiAxMTUuNzgxIDM4NS4wODIgMTE1LjYzNyAzODQgMTE1LjYyNVY0NC42OEM0MDguMjY2IDQwLjQ1MyA0MzQuMTM3IDMyLjIzIDQ2My41NjYgMTguNzk3Wk0zNDkuMDkyIDQ4LjE4QzM1NS4yNzUgNDguMTggMzYxLjY0MSA0Ny41MTYgMzY4IDQ2Ljg5OFYxMTQuODJDMzM4LjQ5MiAxMTIuNzI3IDMxMS41NzQgMTA2LjQ3MyAyODUuMzI4IDEwMC4wNjJDMjgwLjg1IDk4Ljk3MyAyNzYuNDM2IDk3Ljk1MyAyNzIgOTYuODk4VjMzLjQ3N0MyOTUuMTI5IDQwLjg4NyAzMTkuMjE1IDQ4LjE4IDM0OS4wOTIgNDguMThaTTI1NiAyOC40NzdWOTMuMjQyQzIzMi4xNDUgODguMDA4IDIwNy45MjQgODQgMTgwIDg0QzE2Ny43MTcgODQgMTU1Ljc1NCA4NS4xMDIgMTQ0IDg2LjYwOVYyMC4wNjZDMTYxLjE2NCAxNi45NzcgMTc0LjEwMiAxNi4zMTIgMTg1LjIwOSAxNi4zMTJDMjEzLjExMyAxNi4zMTYgMjM0LjY0MyAyMS44NTIgMjU2IDI4LjQ3N1pNMzguMDA4IDUzLjY2NEM3Ny4zNzcgMzcuNzExIDEwNS44MjYgMjguNzExIDEyOCAyMy40NDVWODguODUyQzgwLjAyNyA5Ny40NDkgMzkuMjYyIDExNS40MDYgMTYgMTI1Ljc5N1Y2Mi41ODJMMzguMDA4IDUzLjY2NFpNMjkuOTk0IDM3NC40MDZMMjUuNDk0IDM3Ni40NzdMMTYgMzgwLjcwM1YzMTEuMjdMMjEuMDE2IDMwOS4wNjNDNDIuODgzIDI5OS4yOTcgODIuMTcgMjgxLjg1MiAxMjggMjczLjE5NVYzNDEuNTA0QzgyLjIwNSAzNTAuMjYyIDQ0Ljg5OCAzNjcuNDc3IDI5Ljk5NCAzNzQuNDA2Wk0xNDQgMzM5LjAyM1YyNzAuNzU0QzE1NS43NiAyNjkuMTU2IDE2Ny43MzYgMjY4IDE4MCAyNjhDMjA3LjYzNSAyNjggMjMxLjgzMiAyNzIuMTY0IDI1NiAyNzcuNTg2VjM0NS43MDdDMjMyLjUxOCAzNDAuMzA1IDIwOC42MzcgMzM2LjE2NCAxODAuODQ0IDMzNi4xNjRDMTY4LjIxMyAzMzYuMTY0IDE1NS45NjEgMzM3LjM3MSAxNDQgMzM5LjAyM1pNMjcyIDM0OS41NTFWMjgxLjM0NEMyNzUuMjg5IDI4Mi4xMzcgMjc4LjUzNyAyODIuODc5IDI4MS44NTkgMjgzLjY4OEMzMDguODUgMjkwLjI2MiAzMzYuODE0IDI5Ni43NDIgMzY4IDI5OC44MzZWMzY3LjM0NEMzMzcuODYzIDM2NS44NzUgMzEwLjQ2OSAzNTkuMjY2IDI4NC4wNDEgMzUyLjUzOUMyNzkuOTk2IDM1MS41MDggMjc2LjAwOCAzNTAuNTU1IDI3MiAzNDkuNTUxWk00ODUuNTU3IDM0NS45NDFDNDQ5LjI4MSAzNjAuMDc4IDQxNi4wMzEgMzY3LjA3OCAzODQgMzY3LjY5OVYyOTkuNjI1QzM4NS4wODYgMjk5LjYzNyAzODYuMDc4IDI5OS43ODEgMzg3LjE3MiAyOTkuNzgxQzQyMS43ODkgMjk5Ljc4MSA0NTcuNTE4IDI5My4wMTYgNDk1Ljc5MyAyNzkuODM2TDQ5NS43NSAzMzEuMDU1QzQ5NS43NDQgMzM3LjY5MSA0OTEuNzQ2IDM0My41MzUgNDg1LjU1NyAzNDUuOTQxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FlagCheckered(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M498.529 6.23C491.717 2.098 484.258 0 476.367 0C469.73 0 463.008 1.465 456.928 4.238C415.164 23.301 380.898 32.18 349.092 32.18C320.131 32.18 297.332 24.848 273.195 17.086C247.5 8.836 220.957 0.316 185.211 0.312C157.084 0.312 119.732 3.289 32 38.836L16 45.32V8C16 3.582 12.418 0 8 0S0 3.582 0 8V504C0 508.406 3.594 512 8 512S16 508.406 16 504V398.219L22.508 395.32L32.002 391.094L36.682 388.941C56.305 379.82 115.812 352.164 180.844 352.164C217.687 352.164 248.002 359.879 280.096 368.047C310.82 375.863 342.586 383.945 379.4 383.945C414.861 383.945 451.486 376.391 491.365 360.848C503.732 356.043 511.738 344.352 511.75 331.07L512 32.352C512.008 21.281 506.846 11.273 498.529 6.23ZM495.807 262.984C457.215 276.844 421.564 283.781 387.172 283.781C386.082 283.781 385.082 283.637 384 283.625V215.625C385.086 215.637 386.078 215.781 387.172 215.781C421.811 215.781 457.561 209.008 495.863 195.812L495.807 262.984ZM256 177.242C232.145 172.008 207.924 168 180 168C167.717 168 155.754 169.102 144 170.609V102.754C155.76 101.156 167.736 100 180 100C207.635 100 231.832 104.164 256 109.586V177.242ZM272 113.344C275.289 114.137 278.537 114.879 281.859 115.688C308.85 122.262 336.814 128.742 368 130.836V198.82C338.492 196.727 311.574 190.473 285.328 184.062C280.85 182.973 276.436 181.953 272 180.898V113.344ZM128 172.852C80.027 181.449 39.262 199.406 16 209.797V143.27L21.016 141.063C42.883 131.297 82.17 113.852 128 105.195V172.852ZM16 227.27L21.016 225.063C42.883 215.297 82.17 197.852 128 189.195V256.852C80.027 265.449 39.262 283.406 16 293.797V227.27ZM144 186.754C155.76 185.156 167.736 184 180 184C207.635 184 231.832 188.164 256 193.586V261.242C232.145 256.008 207.924 252 180 252C167.717 252 155.754 253.102 144 254.609V186.754ZM272 197.344C275.289 198.137 278.537 198.879 281.859 199.688C308.85 206.262 336.814 212.742 368 214.836V282.82C338.492 280.727 311.574 274.473 285.328 268.062C280.85 266.973 276.436 265.953 272 264.898V197.344ZM495.877 178.961C457.258 192.832 421.586 199.781 387.172 199.781C386.082 199.781 385.082 199.637 384 199.625V131.625C385.086 131.637 386.078 131.781 387.172 131.781C421.832 131.781 457.605 125 495.934 111.789L495.877 178.961ZM463.566 18.797C467.523 16.992 472.07 16 476.367 16C481.361 16 485.896 17.281 490.236 19.914C493.742 22.039 496.004 26.918 496 32.34L495.947 94.938C457.299 108.828 421.607 115.781 387.172 115.781C386.082 115.781 385.082 115.637 384 115.625V44.68C408.266 40.453 434.137 32.23 463.566 18.797ZM349.092 48.18C355.275 48.18 361.641 47.516 368 46.898V114.82C338.492 112.727 311.574 106.473 285.328 100.062C280.85 98.973 276.436 97.953 272 96.898V33.477C295.129 40.887 319.215 48.18 349.092 48.18ZM256 28.477V93.242C232.145 88.008 207.924 84 180 84C167.717 84 155.754 85.102 144 86.609V20.066C161.164 16.977 174.102 16.312 185.209 16.312C213.113 16.316 234.643 21.852 256 28.477ZM38.008 53.664C77.377 37.711 105.826 28.711 128 23.445V88.852C80.027 97.449 39.262 115.406 16 125.797V62.582L38.008 53.664ZM29.994 374.406L25.494 376.477L16 380.703V311.27L21.016 309.063C42.883 299.297 82.17 281.852 128 273.195V341.504C82.205 350.262 44.898 367.477 29.994 374.406ZM144 339.023V270.754C155.76 269.156 167.736 268 180 268C207.635 268 231.832 272.164 256 277.586V345.707C232.518 340.305 208.637 336.164 180.844 336.164C168.213 336.164 155.961 337.371 144 339.023ZM272 349.551V281.344C275.289 282.137 278.537 282.879 281.859 283.688C308.85 290.262 336.814 296.742 368 298.836V367.344C337.863 365.875 310.469 359.266 284.041 352.539C279.996 351.508 276.008 350.555 272 349.551ZM485.557 345.941C449.281 360.078 416.031 367.078 384 367.699V299.625C385.086 299.637 386.078 299.781 387.172 299.781C421.789 299.781 457.518 293.016 495.793 279.836L495.75 331.055C495.744 337.691 491.746 343.535 485.557 345.941Z" />
        </Icon>
    </>
}