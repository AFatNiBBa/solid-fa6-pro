
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-info` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-info?s=regular square-info}
 * @preview ![square-info](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU2IDAgOTZWNDE2QzAgNDUxLjM0NCAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDQgNDQ4IDQxNlY5NkM0NDggNjAuNjU2IDQxOS4zNDYgMzIgMzg0IDMyWk00MDAgNDE2QzQwMCA0MjQuODIgMzkyLjgyMiA0MzIgMzg0IDQzMkg2NEM1NS4xNzggNDMyIDQ4IDQyNC44MiA0OCA0MTZWOTZDNDggODcuMTggNTUuMTc4IDgwIDY0IDgwSDM4NEMzOTIuODIyIDgwIDQwMCA4Ny4xOCA0MDAgOTZWNDE2Wk0yNjQgMzM2SDI0OFYyNDhDMjQ4IDIzNC43NSAyMzcuMjUgMjI0IDIyNCAyMjRIMTkyQzE3OC43NSAyMjQgMTY4IDIzNC43NSAxNjggMjQ4UzE3OC43NSAyNzIgMTkyIDI3MkgyMDBWMzM2SDE4NEMxNzAuNzUgMzM2IDE2MCAzNDYuNzUgMTYwIDM2MFMxNzAuNzUgMzg0IDE4NCAzODRIMjY0QzI3Ny4yNSAzODQgMjg4IDM3My4yNSAyODggMzYwUzI3Ny4yNSAzMzYgMjY0IDMzNlpNMjI0IDE5MkMyNDEuNjc0IDE5MiAyNTYgMTc3LjY3MiAyNTYgMTYwQzI1NiAxNDIuMzI2IDI0MS42NzQgMTI4IDIyNCAxMjhTMTkyIDE0Mi4zMjYgMTkyIDE2MEMxOTIgMTc3LjY3MiAyMDYuMzI2IDE5MiAyMjQgMTkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareInfo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM400 416C400 424.82 392.822 432 384 432H64C55.178 432 48 424.82 48 416V96C48 87.18 55.178 80 64 80H384C392.822 80 400 87.18 400 96V416ZM264 336H248V248C248 234.75 237.25 224 224 224H192C178.75 224 168 234.75 168 248S178.75 272 192 272H200V336H184C170.75 336 160 346.75 160 360S170.75 384 184 384H264C277.25 384 288 373.25 288 360S277.25 336 264 336ZM224 192C241.674 192 256 177.672 256 160C256 142.326 241.674 128 224 128S192 142.326 192 160C192 177.672 206.326 192 224 192Z" />
        </Icon>
    </>
}