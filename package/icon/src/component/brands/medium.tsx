
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `medium` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/medium?s=brands medium}
 * @preview ![medium](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODAuNSw3NC4yNjJDODAuODEzLDc0LjI2MiwwLDE1NS42MzMsMCwyNTZTODAuODE5LDQzNy43MzgsMTgwLjUsNDM3LjczOCwzNjEsMzU2LjM3MywzNjEsMjU2LDI4MC4xOTEsNzQuMjYyLDE4MC41LDc0LjI2MlptMjg4LjI1LDEwLjY0NmMtNDkuODQ1LDAtOTAuMjQ1LDc2LjYxOS05MC4yNDUsMTcxLjA5NXM0MC40MDYsMTcxLjEsOTAuMjUxLDE3MS4xLDkwLjI1MS03Ni42MTksOTAuMjUxLTE3MS4xSDU1OUM1NTksMTYxLjUsNTE4LjYsODQuOTA4LDQ2OC43NTIsODQuOTA4Wm0xMzkuNTA2LDE3LjgyMWMtMTcuNTI2LDAtMzEuNzM1LDY4LjYyOC0zMS43MzUsMTUzLjI3NHMxNC4yLDE1My4yNzQsMzEuNzM1LDE1My4yNzRTNjQwLDM0MC42MzEsNjQwLDI1NkM2NDAsMTcxLjM1MSw2MjUuNzg1LDEwMi43MjksNjA4LjI1OCwxMDIuNzI5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Medium(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z" />
        </Icon>
    </>
}