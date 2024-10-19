
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `share-from-square` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/share-from-square?s=solid share-from-square}
 * @preview ![share-from-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjguODc5IDE0My40OTJMNDE4LjAxOCA1LjMxM0M0MDQuODEyIC02Ljc3MyAzODQgMy4wMzkgMzg0IDIxLjgzNlY5NkMyNDEuMjIzIDk3LjYyOSAxMjggMTI2LjA3OCAxMjggMjYwLjYzN0MxMjggMzE0Ljk0MSAxNjMuMTk1IDM2OC43NSAyMDIuMDg0IDM5Ni44NjdDMjE0LjIyMyA0MDUuNjQ4IDIzMS41IDM5NC42MjkgMjI3LjAyNyAzODAuNDA2QzE4Ni43MjMgMjUyLjIyNyAyNTYgMjI0IDM4NCAyMjMuOTY5VjI5OC4xNzJDMzg0IDMxNi45OTIgNDA0Ljg0IDMyNi43NjYgNDE4LjAxOCAzMTQuNjhMNTY4Ljg3OSAxNzYuNUM1NzguMzYxIDE2Ny44MDkgNTc4LjM4NyAxNTIuMTg0IDU2OC44NzkgMTQzLjQ5MlpNNDE2IDM4NEMzOTguMzI2IDM4NCAzODQgMzk4LjMyOCAzODQgNDE2VjQ0Ny45OTZINjRWMTI4SDk2QzExMy42NzQgMTI4IDEyOCAxMTMuNjc2IDEyOCA5NlMxMTMuNjc0IDY0IDk2IDY0SDY0QzI4LjY1NCA2NCAwIDkyLjY1MiAwIDEyOFY0NDcuOTk2QzAgNDgzLjM0IDI4LjY1NCA1MTEuOTk2IDY0IDUxMS45OTZIMzg0QzQxOS4zNDYgNTExLjk5NiA0NDggNDgzLjM0IDQ0OCA0NDcuOTk2VjQxNkM0NDggMzk4LjMyOCA0MzMuNjc0IDM4NCA0MTYgMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ShareFromSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M568.879 143.492L418.018 5.313C404.812 -6.773 384 3.039 384 21.836V96C241.223 97.629 128 126.078 128 260.637C128 314.941 163.195 368.75 202.084 396.867C214.223 405.648 231.5 394.629 227.027 380.406C186.723 252.227 256 224 384 223.969V298.172C384 316.992 404.84 326.766 418.018 314.68L568.879 176.5C578.361 167.809 578.387 152.184 568.879 143.492ZM416 384C398.326 384 384 398.328 384 416V447.996H64V128H96C113.674 128 128 113.676 128 96S113.674 64 96 64H64C28.654 64 0 92.652 0 128V447.996C0 483.34 28.654 511.996 64 511.996H384C419.346 511.996 448 483.34 448 447.996V416C448 398.328 433.674 384 416 384Z" />
        </Icon>
    </>
}