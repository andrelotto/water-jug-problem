import { WaterJugInput, WaterJugOutput } from "../types/WaterJugTypes";
import { WaterJugSolver } from "../utils/waterjug.solver";

describe('WaterJugSolver', () => {
    describe('CanSolve', () => {
        it('should return false if z is greater than both x and y', () => {
            const input: WaterJugInput = { x: 4, y: 5, z: 6 };
            expect(WaterJugSolver.CanSolve(input)).toBe(false);
        });

        it('should return false if x and y are even and z is odd', () => {
            const input: WaterJugInput = { x: 4, y: 4, z: 5 };
            expect(WaterJugSolver.CanSolve(input)).toBe(false);
        });

        it('should return true for a valid input', () => {
            const input: WaterJugInput = { x: 4, y: 5, z: 5 };
            expect(WaterJugSolver.CanSolve(input)).toBe(true);
        });
    });

    describe('FindSolution', () => {
        it('should return null if there is no solution', () => {
            const input: WaterJugInput = { x: 4, y: 5, z: 6 };
            expect(WaterJugSolver.FindSolution(input)).toBeNull();
        });

        it('should return the solution if it exists', () => {
            const input: WaterJugInput = { x: 4, y: 5, z: 5 };
            const solution: WaterJugOutput | null = WaterJugSolver.FindSolution(input);
            expect(solution).not.toBeNull();
            expect(solution).toStrictEqual([
                { x: 0, y: 5 },
                { x: 4, y: 1 },
                { x: 0, y: 5 },
                { x: 4, y: 0 },
                { x: 0, y: 4 }
            ]);
        });
    });
});