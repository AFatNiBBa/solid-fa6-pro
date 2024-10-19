
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hourglass-start` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-start?s=solid hourglass-start}
 * @preview ![hourglass-start](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgNDQ4VjQyNi42NjhDMzUyIDM5OC45NzMgMzQzLjAxOCAzNzIuMDIzIDMyNi40IDM0OS44NjdMMjU2IDI1NkwzMjYuNCAxNjIuMTMzQzM0My4wMTggMTM5Ljk3NyAzNTIgMTEzLjAzMSAzNTIgODUuMzM2VjY0QzM2OS42NzQgNjQgMzg0IDQ5LjY3MiAzODQgMzJDMzg0IDE0LjMyNiAzNjkuNjc0IDAgMzUyIDBIMzJDMTQuMzI2IDAgMCAxNC4zMjYgMCAzMkMwIDQ5LjY3MiAxNC4zMjYgNjQgMzIgNjRWODUuMzM2QzMyIDExMy4wMzEgNDAuOTgyIDEzOS45NzcgNTcuNiAxNjIuMTMzTDEyOCAyNTZMNTcuNiAzNDkuODY3QzQwLjk4MiAzNzIuMDIzIDMyIDM5OC45NzMgMzIgNDI2LjY2OFY0NDhDMTQuMzI2IDQ0OCAwIDQ2Mi4zMjYgMCA0ODBDMCA0OTcuNjcyIDE0LjMyNiA1MTIgMzIgNTEySDM1MkMzNjkuNjc0IDUxMiAzODQgNDk3LjY3MiAzODQgNDgwQzM4NCA0NjIuMzI2IDM2OS42NzQgNDQ4IDM1MiA0NDhaTTk2IDQ0OFY0MjYuNjY4Qzk2IDQxMi45MSAxMDAuNTQ1IDM5OS4yNzMgMTA4Ljc5OSAzODguMjY2TDE5MiAyNzcuMzMyTDI3NS4yMDEgMzg4LjI2NkMyODMuNDU1IDM5OS4yNzMgMjg4IDQxMi45MSAyODggNDI2LjY2OFY0NDhIOTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HourglassStart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M352 448V426.668C352 398.973 343.018 372.023 326.4 349.867L256 256L326.4 162.133C343.018 139.977 352 113.031 352 85.336V64C369.674 64 384 49.672 384 32C384 14.326 369.674 0 352 0H32C14.326 0 0 14.326 0 32C0 49.672 14.326 64 32 64V85.336C32 113.031 40.982 139.977 57.6 162.133L128 256L57.6 349.867C40.982 372.023 32 398.973 32 426.668V448C14.326 448 0 462.326 0 480C0 497.672 14.326 512 32 512H352C369.674 512 384 497.672 384 480C384 462.326 369.674 448 352 448ZM96 448V426.668C96 412.91 100.545 399.273 108.799 388.266L192 277.332L275.201 388.266C283.455 399.273 288 412.91 288 426.668V448H96Z" />
        </Icon>
    </>
}