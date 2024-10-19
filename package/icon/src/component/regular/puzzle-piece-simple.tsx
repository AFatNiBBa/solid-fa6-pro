
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `puzzle-piece-simple` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/puzzle-piece-simple?s=regular puzzle-piece-simple}
 * @preview ![puzzle-piece-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NTEuMTk3IDE1My42QzU0My4yNCAxNTMuNiA1MzUuNDU1IDE1NC43ODkgNTI3Ljk5OCAxNTcuMDc2VjEyMy4xOTlDNTI3Ljk5OCA4MS43MzQgNDk0LjI2NCA0OCA0NTIuNzk5IDQ4SDM2Ny45MDRDMzQ5LjI5MyA0OCAzMzIuMzg1IDU1LjQzOSAzMjAgNjcuNUMzMDcuNjE1IDU1LjQzOSAyOTAuNzA1IDQ4IDI3Mi4wOTQgNDhIMTg3LjE5N0MxNDUuNzMyIDQ4IDExMS45OTggODEuNzM0IDExMS45OTggMTIzLjE5OVYxNTcuMDc2QzEwNC41NDMgMTU0Ljc4OSA5Ni43NTYgMTUzLjYgODguNzk5IDE1My42QzM5LjAwNiAxNTMuNiAwIDE5OC41OCAwIDI1NlMzOS4wMDYgMzU4LjQgODguNzk5IDM1OC40Qzk2Ljc1NiAzNTguNCAxMDQuNTQzIDM1Ny4yMTEgMTExLjk5OCAzNTQuOTI0VjM4OC44MDFDMTExLjk5OCA0MzAuMjY2IDE0NS43MzIgNDY0IDE4Ny4xOTcgNDY0SDI3Mi4wOTRDMjkwLjcwNSA0NjQgMzA3LjYxNSA0NTYuNTU5IDMyMCA0NDQuNUMzMzIuMzg1IDQ1Ni41NTkgMzQ5LjI5MyA0NjQgMzY3LjkwNCA0NjRINDUyLjc5OUM0OTQuMjY0IDQ2NCA1MjcuOTk4IDQzMC4yNjYgNTI3Ljk5OCAzODguODAxVjM1NC45MjRDNTM1LjQ1NSAzNTcuMjExIDU0My4yNCAzNTguNCA1NTEuMTk3IDM1OC40QzYwMC45OTIgMzU4LjQgNjM5Ljk5OCAzMTMuNDIgNjM5Ljk5OCAyNTZTNjAwLjk5MiAxNTMuNiA1NTEuMTk3IDE1My42Wk01NTEuMTk3IDMxMC40QzUzOS4zOTggMzEwLjQgNTI4Ljg2MSAzMDMuNjQ2IDUyMS40NTEgMjkyLjkzOUM1MTcuMzg5IDI4Ny4wNzIgNTExLjA0MSAyODMuMTk5IDUwMy45MDQgMjgzLjE5OUM0OTIuNDY5IDI4My4xOTkgNDc5Ljk5OCAyOTIuNDY5IDQ3OS45OTggMzAzLjkwNFYzODguODAxQzQ3OS45OTggNDAzLjgyMiA0NjcuODIgNDE2IDQ1Mi43OTkgNDE2SDM2Ny45MDRDMzU2LjQ2OSA0MTYgMzQ3LjE5OSA0MDYuNzMgMzQ3LjE5OSAzOTUuMjk1QzM0Ny4xOTkgMzg4LjE1NiAzNTEuMDcgMzgxLjgxMSAzNTYuOTM5IDM3Ny43NDhDMzY3LjY0NiAzNzAuMzM2IDM3NC4zOTggMzU5Ljc5NyAzNzQuMzk4IDM0OEMzNzQuMzk4IDMyNS40NjcgMzUwLjA0MyAzMDcuMjAxIDMxOS45OTggMzA3LjIwMUMyODkuOTU1IDMwNy4yMDEgMjY1LjYgMzI1LjQ2NyAyNjUuNiAzNDhDMjY1LjYgMzU5Ljc5NyAyNzIuMzUgMzcwLjMzNiAyODMuMDU5IDM3Ny43NDhDMjg4LjkyOCAzODEuODExIDI5Mi43OTkgMzg4LjE1NiAyOTIuNzk5IDM5NS4yOTVDMjkyLjc5OSA0MDYuNzMgMjgzLjUyNyA0MTYgMjcyLjA5NCA0MTZIMTg3LjE5N0MxNzIuMTc2IDQxNiAxNTkuOTk4IDQwMy44MjIgMTU5Ljk5OCAzODguODAxVjMwMy45MDRDMTU5Ljk5OCAyOTIuNDY5IDE0Ny41MjkgMjgzLjE5OSAxMzYuMDk0IDI4My4xOTlDMTI4Ljk1NyAyODMuMTk5IDEyMi42MDcgMjg3LjA3MiAxMTguNTQ1IDI5Mi45MzlDMTExLjEzNyAzMDMuNjQ2IDEwMC41OTggMzEwLjQgODguNzk5IDMxMC40QzY2LjI2NiAzMTAuNCA0OCAyODYuMDQzIDQ4IDI1NlM2Ni4yNjYgMjAxLjYgODguNzk5IDIwMS42QzEwMC41OTggMjAxLjYgMTExLjEzNyAyMDguMzUyIDExOC41NDUgMjE5LjA1OUMxMjIuNjA3IDIyNC45MjggMTI4Ljk1NyAyMjguODAxIDEzNi4wOTQgMjI4LjgwMUMxNDcuNTI5IDIyOC44MDEgMTU5Ljk5OCAyMTkuNDM2IDE1OS45OTggMjA4VjEyMy4xOTlDMTU5Ljk5OCAxMDguMTc4IDE3Mi4xNzYgOTYgMTg3LjE5NyA5NkgyNzIuMDk0QzI4My41MjcgOTYgMjkyLjc5OSAxMDUuMjY4IDI5Mi43OTkgMTE2LjcwM0MyOTIuNzk5IDEyMy44NDIgMjg4LjkyOCAxMzAuMTg5IDI4My4wNTkgMTM0LjI1MkMyNzIuMzUgMTQxLjY2MiAyNjUuNiAxNTIuMjAxIDI2NS42IDE2NEMyNjUuNiAxODYuNTMzIDI4OS45NTUgMjA0Ljc5OSAzMTkuOTk4IDIwNC43OTlDMzUwLjA0MyAyMDQuNzk5IDM3NC4zOTggMTg2LjUzMyAzNzQuMzk4IDE2NEMzNzQuMzk4IDE1Mi4yMDEgMzY3LjY0NiAxNDEuNjYyIDM1Ni45MzkgMTM0LjI1MkMzNTEuMDcgMTMwLjE4OSAzNDcuMTk5IDEyMy44NDIgMzQ3LjE5OSAxMTYuNzAzQzM0Ny4xOTkgMTA1LjI2OCAzNTYuNDY5IDk2IDM2Ny45MDQgOTZINDUyLjc5OUM0NjcuODIgOTYgNDc5Ljk5OCAxMDguMTc4IDQ3OS45OTggMTIzLjE5OVYyMDhDNDc5Ljk5OCAyMTkuNDM2IDQ5Mi40NjkgMjI4LjgwMSA1MDMuOTA0IDIyOC44MDFDNTExLjA0MSAyMjguODAxIDUxNy4zODkgMjI0LjkyOCA1MjEuNDUxIDIxOS4wNTlDNTI4Ljg2MSAyMDguMzUyIDUzOS4zOTggMjAxLjYgNTUxLjE5NyAyMDEuNkM1NzMuNzMgMjAxLjYgNTkxLjk5OCAyMjUuOTU3IDU5MS45OTggMjU2UzU3My43MyAzMTAuNCA1NTEuMTk3IDMxMC40WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PuzzlePieceSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M551.197 153.6C543.24 153.6 535.455 154.789 527.998 157.076V123.199C527.998 81.734 494.264 48 452.799 48H367.904C349.293 48 332.385 55.439 320 67.5C307.615 55.439 290.705 48 272.094 48H187.197C145.732 48 111.998 81.734 111.998 123.199V157.076C104.543 154.789 96.756 153.6 88.799 153.6C39.006 153.6 0 198.58 0 256S39.006 358.4 88.799 358.4C96.756 358.4 104.543 357.211 111.998 354.924V388.801C111.998 430.266 145.732 464 187.197 464H272.094C290.705 464 307.615 456.559 320 444.5C332.385 456.559 349.293 464 367.904 464H452.799C494.264 464 527.998 430.266 527.998 388.801V354.924C535.455 357.211 543.24 358.4 551.197 358.4C600.992 358.4 639.998 313.42 639.998 256S600.992 153.6 551.197 153.6ZM551.197 310.4C539.398 310.4 528.861 303.646 521.451 292.939C517.389 287.072 511.041 283.199 503.904 283.199C492.469 283.199 479.998 292.469 479.998 303.904V388.801C479.998 403.822 467.82 416 452.799 416H367.904C356.469 416 347.199 406.73 347.199 395.295C347.199 388.156 351.07 381.811 356.939 377.748C367.646 370.336 374.398 359.797 374.398 348C374.398 325.467 350.043 307.201 319.998 307.201C289.955 307.201 265.6 325.467 265.6 348C265.6 359.797 272.35 370.336 283.059 377.748C288.928 381.811 292.799 388.156 292.799 395.295C292.799 406.73 283.527 416 272.094 416H187.197C172.176 416 159.998 403.822 159.998 388.801V303.904C159.998 292.469 147.529 283.199 136.094 283.199C128.957 283.199 122.607 287.072 118.545 292.939C111.137 303.646 100.598 310.4 88.799 310.4C66.266 310.4 48 286.043 48 256S66.266 201.6 88.799 201.6C100.598 201.6 111.137 208.352 118.545 219.059C122.607 224.928 128.957 228.801 136.094 228.801C147.529 228.801 159.998 219.436 159.998 208V123.199C159.998 108.178 172.176 96 187.197 96H272.094C283.527 96 292.799 105.268 292.799 116.703C292.799 123.842 288.928 130.189 283.059 134.252C272.35 141.662 265.6 152.201 265.6 164C265.6 186.533 289.955 204.799 319.998 204.799C350.043 204.799 374.398 186.533 374.398 164C374.398 152.201 367.646 141.662 356.939 134.252C351.07 130.189 347.199 123.842 347.199 116.703C347.199 105.268 356.469 96 367.904 96H452.799C467.82 96 479.998 108.178 479.998 123.199V208C479.998 219.436 492.469 228.801 503.904 228.801C511.041 228.801 517.389 224.928 521.451 219.059C528.861 208.352 539.398 201.6 551.197 201.6C573.73 201.6 591.998 225.957 591.998 256S573.73 310.4 551.197 310.4Z" />
        </Icon>
    </>
}