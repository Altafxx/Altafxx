class SoundManager {
    private sounds: Map<string, HTMLAudioElement> = new Map();
    private isInitialized = false;

    constructor() {
        // Initialize sounds when the class is instantiated
        this.initializeSounds();
    }

    private initializeSounds() {
        if (typeof window === 'undefined') return; // Skip on server-side

        const soundFiles = {
            'mouse-click': '/sounds/mouse-click.mp3',
            'bubble': '/sounds/bubble.mp3',
            'folder-open': '/sounds/bubble.mp3', // Using bubble sound for folder open
            'folder-close': '/sounds/mouse-click.mp3' // Using mouse-click for folder close
        };

        // Preload all sounds
        Object.entries(soundFiles).forEach(([key, path]) => {
            const audio = new Audio(path);
            audio.preload = 'auto';
            audio.volume = 0.5; // Set default volume
            
            // Handle loading
            audio.addEventListener('canplaythrough', () => {
                console.log(`Sound ${key} loaded successfully`);
            });

            audio.addEventListener('error', (e) => {
                console.warn(`Failed to load sound ${key}:`, e);
            });

            this.sounds.set(key, audio);
        });

        this.isInitialized = true;
    }

    public play(soundKey: string, volume: number = 0.5): void {
        if (!this.isInitialized || typeof window === 'undefined') return;

        const sound = this.sounds.get(soundKey);
        if (sound) {
            try {
                // Reset the audio to the beginning
                sound.currentTime = 0;
                sound.volume = volume;
                
                // Play the sound
                const playPromise = sound.play();
                
                // Handle the promise to avoid unhandled promise rejection
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.warn(`Failed to play sound ${soundKey}:`, error);
                    });
                }
            } catch (error) {
                console.warn(`Error playing sound ${soundKey}:`, error);
            }
        } else {
            console.warn(`Sound ${soundKey} not found`);
        }
    }

    public setVolume(soundKey: string, volume: number): void {
        const sound = this.sounds.get(soundKey);
        if (sound) {
            sound.volume = Math.max(0, Math.min(1, volume)); // Clamp between 0 and 1
        }
    }

    public setGlobalVolume(volume: number): void {
        const clampedVolume = Math.max(0, Math.min(1, volume));
        this.sounds.forEach(sound => {
            sound.volume = clampedVolume;
        });
    }

    public mute(): void {
        this.sounds.forEach(sound => {
            sound.muted = true;
        });
    }

    public unmute(): void {
        this.sounds.forEach(sound => {
            sound.muted = false;
        });
    }
}

// Create a singleton instance
export const soundManager = new SoundManager();

// Export convenience functions
export const playSound = (soundKey: string, volume?: number) => soundManager.play(soundKey, volume);
export const setVolume = (soundKey: string, volume: number) => soundManager.setVolume(soundKey, volume);
export const setGlobalVolume = (volume: number) => soundManager.setGlobalVolume(volume);
export const muteAll = () => soundManager.mute();
export const unmuteAll = () => soundManager.unmute();
