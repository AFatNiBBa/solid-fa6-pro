
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `brackets-round` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/brackets-round?s=thin brackets-round}
 * @preview ![brackets-round](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDAuNjg4IDU0LjQ2QzE0NC4yNSA1MS44NjYgMTQ1LjA2MyA0Ni44NjYgMTQyLjQ2OSA0My4zMDNDMTM5Ljg3NSAzOS43MDkgMTM0Ljg0NCAzOC45NTkgMTMxLjMxMiA0MS40OTFDMTI3LjI1IDQ0LjQyOCAzMiAxMTQuODY3IDMyIDI1NS45OTVTMTI3LjI1IDQ2Ny41NjMgMTMxLjMxMiA0NzAuNUMxMzIuNzE5IDQ3MS41IDEzNC4zNzUgNDcyIDEzNiA0NzJDMTM4LjQ2OSA0NzIgMTQwLjkwNiA0NzAuODQ0IDE0Mi40NjkgNDY4LjY4OEMxNDUuMDYyIDQ2NS4xMjUgMTQ0LjI1IDQ2MC4xMjUgMTQwLjY4NyA0NTcuNTMxQzEzOS43ODEgNDU2Ljg0NCA0OCAzODguNjU1IDQ4IDI1NS45OTVTMTM5Ljc4MSA1NS4xNDcgMTQwLjY4OCA1NC40NlpNMzgwLjY4OCA0MS40OTFDMzc3LjEyNSAzOC45NTkgMzcyLjEyNSAzOS43NDEgMzY5LjUzMSA0My4zMDNDMzY2LjkzOCA0Ni44NjYgMzY3Ljc1IDUxLjg2NiAzNzEuMzEzIDU0LjQ2QzM3Mi4yMTkgNTUuMTQ3IDQ2NCAxMjMuMzM2IDQ2NCAyNTUuOTk1UzM3Mi4yMTkgNDU2Ljg0NCAzNzEuMzEyIDQ1Ny41MzFDMzY3Ljc1IDQ2MC4xMjUgMzY2LjkzNyA0NjUuMTI1IDM2OS41MzEgNDY4LjY4OEMzNzEuMDk0IDQ3MC44NDQgMzczLjUzMSA0NzIgMzc2IDQ3MkMzNzcuNjI1IDQ3MiAzNzkuMjgxIDQ3MS41IDM4MC42ODcgNDcwLjVDMzg0Ljc1IDQ2Ny41NjMgNDgwIDM5Ny4xMjMgNDgwIDI1NS45OTVTMzg0Ljc1IDQ0LjQyOCAzODAuNjg4IDQxLjQ5MVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BracketsRound(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M140.688 54.46C144.25 51.866 145.063 46.866 142.469 43.303C139.875 39.709 134.844 38.959 131.312 41.491C127.25 44.428 32 114.867 32 255.995S127.25 467.563 131.312 470.5C132.719 471.5 134.375 472 136 472C138.469 472 140.906 470.844 142.469 468.688C145.062 465.125 144.25 460.125 140.687 457.531C139.781 456.844 48 388.655 48 255.995S139.781 55.147 140.688 54.46ZM380.688 41.491C377.125 38.959 372.125 39.741 369.531 43.303C366.938 46.866 367.75 51.866 371.313 54.46C372.219 55.147 464 123.336 464 255.995S372.219 456.844 371.312 457.531C367.75 460.125 366.937 465.125 369.531 468.688C371.094 470.844 373.531 472 376 472C377.625 472 379.281 471.5 380.687 470.5C384.75 467.563 480 397.123 480 255.995S384.75 44.428 380.688 41.491Z" />
        </Icon>
    </>
}