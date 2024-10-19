
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pen-nib` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pen-nib?s=solid pen-nib}
 * @preview ![pen-nib](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMzYuNjA4IDEzOC43OTZDMTE2LjIzNiAxNDQuNTQ1IDk5Ljk4OCAxNjAuMDQzIDkzLjIzOSAxODAuMTY2TDAgNDYwLjAwNkwxNC43NDggNDc0Ljc1NUwxNjQuNzMgMzI0LjY0OEMxNjEuNzMgMzE4LjM5OSAxNTkuOTggMzExLjM5OSAxNTkuOTggMzA0LjAyNUMxNTkuOTggMjc3LjUyOSAxODEuNDc4IDI1Ni4wMzEgMjA3Ljk3NSAyNTYuMDMxUzI1NS45NjkgMjc3LjUyOSAyNTUuOTY5IDMwNC4wMjVTMjM0LjQ3MSAzNTIuMDIgMjA3Ljk3NSAzNTIuMDJDMjAwLjYwMSAzNTIuMDIgMTkzLjYwMSAzNTAuMjcgMTg3LjM1MiAzNDcuMjdMMzcuMjQ1IDQ5Ny4yNTJMNTEuOTk0IDUxMkwzMzEuODM1IDQxOC43NjFDMzUxLjk1NyA0MTIuMDEyIDM2Ny40NTUgMzk1Ljc2NCAzNzMuMjA0IDM3NS4zOTJMNDE1Ljk0OSAyMjQuMDM1TDI4Ny45NjUgOTYuMDUxTDEzNi42MDggMTM4Ljc5NlpNNDk3LjkzOSA3NC4xNzhMNDM3LjgyMiAxNC4wNjFDNDE5LjA3NCAtNC42ODcgMzg4LjU3OCAtNC42ODcgMzY5LjgzIDE0LjA2MUwzMTMuMzM3IDcwLjY3OUw0NDEuMzIxIDE5OC42NjNMNDk3LjkzOSAxNDIuMTdDNTE2LjY4NyAxMjMuNDIyIDUxNi42ODcgOTIuOTI2IDQ5Ny45MzkgNzQuMTc4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PenNib(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M136.608 138.796C116.236 144.545 99.988 160.043 93.239 180.166L0 460.006L14.748 474.755L164.73 324.648C161.73 318.399 159.98 311.399 159.98 304.025C159.98 277.529 181.478 256.031 207.975 256.031S255.969 277.529 255.969 304.025S234.471 352.02 207.975 352.02C200.601 352.02 193.601 350.27 187.352 347.27L37.245 497.252L51.994 512L331.835 418.761C351.957 412.012 367.455 395.764 373.204 375.392L415.949 224.035L287.965 96.051L136.608 138.796ZM497.939 74.178L437.822 14.061C419.074 -4.687 388.578 -4.687 369.83 14.061L313.337 70.679L441.321 198.663L497.939 142.17C516.687 123.422 516.687 92.926 497.939 74.178Z" />
        </Icon>
    </>
}