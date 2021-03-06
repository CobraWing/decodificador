/*
 * Copyright (C) 2017 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { Project } from "./Project";
import { Signal } from "../utils/Signal";

/**
 * Abstract base class for an injectable state object which holds a project.
 */
export abstract class ProjectState<T extends Project> {
    /**
     * This signal is emitted when the project within this project state has been changed.
     *
     * @event
     */
    public onChanged = new Signal<void>();

    /** The current project within the state. */
    protected project: T;

    /**
     * Creates a new state object holding the specified initial project.
     *
     * @param project  The initial project to put into the state.
     */
    protected constructor(project: T) {
        this.project = project;
        project.onChanged.connect(this.change, this);
    }

    /**
     * Emits the onChanged signal.
     */
    private change(): void {
        this.onChanged.emit(undefined);
    }

    /**
     * Returns the current project.
     *
     * @return The current project.
     */
    public getProject(): T {
        return this.project;
    }

    /**
     * Replaces the project within this state with the given one.
     *
     * @param project  The new project to set.
     */
    public setProject(project: T) {
        this.project.onChanged.disconnect(this.change, this);
        this.project = project;
        project.onChanged.connect(this.change, this);
        this.change();
    }
}
