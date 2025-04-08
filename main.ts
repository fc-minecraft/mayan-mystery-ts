//ENUMS

enum Three_Axis {
    //% block="вперед"
    Forward,
    //% block="влево"
    Left,
    //% block="вправо"
    Right
}

//GLOBAL VARIABLES
const communicationsTimeout = 75;

//%  block="Mayan Mystery" weight=200 color=#0B3D91 icon="\uf186"
namespace mayanMystery {

/**
 * This function moves the Agent
 * in three directions
 */
//% block = "перемещение Агента %d на %n"
    export function agent_move(d: Three_Axis, n: number): void {
        for (let i =0; i < n; i++){
            switch (d) {
                case Three_Axis.Forward:
                    player.execute("scoreboard players set .output global 1")
                    break;
                case Three_Axis.Left:
                    player.execute("scoreboard players set .output global 2")
                    break;
                case Three_Axis.Right:
                    player.execute("scoreboard players set .output global 3")
            }
            loops.pause(communicationsTimeout)
        }
    }

}