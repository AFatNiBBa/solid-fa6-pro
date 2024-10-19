
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `triangle` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/triangle?s=light triangle}
 * @preview ![triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDYuMjczIDQxN0wyOTIuOTUxIDUzQzI4NC43ODUgMzkgMjcwLjM5NiAzMiAyNTUuOTk0IDMyUzIyNy4xNzUgMzkgMjE4Ljk1MyA1M0w1Ljc0MiA0MTdDLTEwLjU5MiA0NDQuODkxIDkuODUxIDQ4MCA0Mi43NCA0ODBINDY5LjI3NUM1MDIuMDUyIDQ4MCA1MjIuNjA3IDQ0NSA1MDYuMjczIDQxN1pNNDc4LjY1IDQ0Mi43MDNDNDc3LjUxMyA0NDQuNjgyIDQ3NC43ODUgNDQ4IDQ2OS4yNzUgNDQ4SDQyLjc0QzM3LjIwOSA0NDggMzQuNDgyIDQ0NC42ODIgMzMuMzQ3IDQ0Mi43MDVDMzIuMDkgNDQwLjUxIDMxLjA3IDQzNy4wNzIgMzMuMzUzIDQzMy4xNzRMMjQ2LjU0NyA2OS4yMDVDMjQ5LjIwNyA2NC42NzYgMjUzLjYwNyA2NCAyNTUuOTk0IDY0QzI1OC4zNTcgNjQgMjYyLjcwOSA2NC42NjQgMjY1LjM0MSA2OS4xOEw0NzguNjMyIDQzMy4xMjNDNDgwLjkzMSA0MzcuMDY0IDQ3OS45MSA0NDAuNTA4IDQ3OC42NSA0NDIuNzAzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Triangle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M506.273 417L292.951 53C284.785 39 270.396 32 255.994 32S227.175 39 218.953 53L5.742 417C-10.592 444.891 9.851 480 42.74 480H469.275C502.052 480 522.607 445 506.273 417ZM478.65 442.703C477.513 444.682 474.785 448 469.275 448H42.74C37.209 448 34.482 444.682 33.347 442.705C32.09 440.51 31.07 437.072 33.353 433.174L246.547 69.205C249.207 64.676 253.607 64 255.994 64C258.357 64 262.709 64.664 265.341 69.18L478.632 433.123C480.931 437.064 479.91 440.508 478.65 442.703Z" />
        </Icon>
    </>
}