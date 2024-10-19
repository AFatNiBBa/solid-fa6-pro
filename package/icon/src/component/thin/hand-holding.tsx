
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-holding` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding?s=thin hand-holding}
 * @preview ![hand-holding](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzUuNDQ5IDM1OS4yNTNDNTczLjUyNyAzNzEuOTM3IDU2Ni43NzcgMzgzLjA5MSA1NTYuNDY1IDM5MC42ODNMNDIxLjQwNyA0OTAuMTYxQzQwMi4yODMgNTA0LjI1MiAzNzguNjc0IDUxMiAzNTQuOTU2IDUxMkg4QzMuNTc4IDUxMiAwIDUwOC40MDcgMCA1MDQuMDAyQzAgNDk5LjU5NyAzLjU3OCA0OTYuMDA0IDggNDk2LjAwNEgzNTQuOTU2QzM3NS4yODQgNDk2LjAwNCAzOTUuNTE3IDQ4OS4zNDkgNDExLjkwNyA0NzcuMjg5TDU0Ni45NjUgMzc3LjgxMUM1NTMuODU2IDM3Mi43NSA1NTguMzQgMzY1LjMxNCA1NTkuNjIxIDM1Ni44NDdDNTYwLjkwMiAzNDguNDExIDU1OC44MDkgMzM5Ljk3NiA1NTMuNzQ2IDMzMy4xMDJDNTQ4LjYzNyAzMjYuMTY2IDU0MS4xNjkgMzIxLjY2NyA1MzIuNyAzMjAuMzg2QzUyNC4zMjUgMzE5LjIzIDUxNS44NzMgMzIxLjIzIDUwOS4wMTMgMzI2LjMyM0wzODcuMjA1IDQxNi4wMjFIMjYzLjk3NUMyNTAuNzQxIDQxNi4wMjEgMjM5Ljk3NiA0MDUuMjc0IDIzOS45NzYgMzkyLjA1OEMyMzkuOTc2IDM3OC44NDIgMjUwLjc0MSAzNjguMDYzIDI2My45NzUgMzY4LjA2M0gzNDIuMjA3QzM1NC44NDcgMzY4LjA2MyAzNjUuOCAzNTkuNTAzIDM2Ny42OSAzNDguMTNDMzY4Ljg0NyAzNDAuOTc2IDM2Ni45NCAzMzQuMDA4IDM2Mi4zIDMyOC41NDFDMzU3LjcyMiAzMjMuMTY3IDM1MS4wMzUgMzIwLjA3NCAzNDMuOTU3IDMyMC4wNzRIMTgzLjk3OEMxNTguOTE2IDMyMC4wNzQgMTM0LjM4NiAzMjguNzYgMTE0LjkwMiAzNDQuNTM3TDY2LjIxNiAzODQuMDZIOEMzLjU3OCAzODQuMDYgMCAzODAuNDY3IDAgMzc2LjA2MlMzLjU3OCAzNjguMDYzIDggMzY4LjA2M0g2MC41MjlMMTA0LjgyNCAzMzIuMTAzQzEyNy4xNTIgMzE0LjA0NCAxNTUuMjYgMzA0LjA3OCAxODMuOTc4IDMwNC4wNzhIMzQzLjk1N0MzNTUuNzIyIDMwNC4wNzggMzY2Ljg2MiAzMDkuMjMzIDM3NC40ODcgMzE4LjE5OUMzODIuMTEyIDMyNy4xMzUgMzg1LjM3NyAzMzkuMDA3IDM4My40NzEgMzUwLjcyM0MzODAuMjk5IDM2OS43NSAzNjIuNTY1IDM4NC4wNiAzNDIuMjA3IDM4NC4wNkgyNjMuOTc1QzI1OS42MzIgMzg0LjA2IDI1NS45NzUgMzg3LjcxNSAyNTUuOTc1IDM5Mi4wNThDMjU1Ljk3NSAzOTYuMzcgMjU5LjYzMiA0MDAuMDI1IDI2My45NzUgNDAwLjAyNUgzODEuOTU1TDQ5OS40OTggMzEzLjQ1MUM1MDkuNzYzIDMwNS44MjcgNTIyLjMxIDMwMi41NzggNTM1LjA3NSAzMDQuNTc3QzU0Ny43NzggMzA2LjQ4MyA1NTguOTgxIDMxMy4yMzIgNTY2LjYyMSAzMjMuNjA0QzU3NC4yMyAzMzMuOTE1IDU3Ny4zNyAzNDYuNTk5IDU3NS40NDkgMzU5LjI1M1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HandHolding(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M575.449 359.253C573.527 371.937 566.777 383.091 556.465 390.683L421.407 490.161C402.283 504.252 378.674 512 354.956 512H8C3.578 512 0 508.407 0 504.002C0 499.597 3.578 496.004 8 496.004H354.956C375.284 496.004 395.517 489.349 411.907 477.289L546.965 377.811C553.856 372.75 558.34 365.314 559.621 356.847C560.902 348.411 558.809 339.976 553.746 333.102C548.637 326.166 541.169 321.667 532.7 320.386C524.325 319.23 515.873 321.23 509.013 326.323L387.205 416.021H263.975C250.741 416.021 239.976 405.274 239.976 392.058C239.976 378.842 250.741 368.063 263.975 368.063H342.207C354.847 368.063 365.8 359.503 367.69 348.13C368.847 340.976 366.94 334.008 362.3 328.541C357.722 323.167 351.035 320.074 343.957 320.074H183.978C158.916 320.074 134.386 328.76 114.902 344.537L66.216 384.06H8C3.578 384.06 0 380.467 0 376.062S3.578 368.063 8 368.063H60.529L104.824 332.103C127.152 314.044 155.26 304.078 183.978 304.078H343.957C355.722 304.078 366.862 309.233 374.487 318.199C382.112 327.135 385.377 339.007 383.471 350.723C380.299 369.75 362.565 384.06 342.207 384.06H263.975C259.632 384.06 255.975 387.715 255.975 392.058C255.975 396.37 259.632 400.025 263.975 400.025H381.955L499.498 313.451C509.763 305.827 522.31 302.578 535.075 304.577C547.778 306.483 558.981 313.232 566.621 323.604C574.23 333.915 577.37 346.599 575.449 359.253Z" />
        </Icon>
    </>
}