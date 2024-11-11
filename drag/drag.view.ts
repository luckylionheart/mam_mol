namespace $.$$ {
    /**
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_drag_demo
     */
    export class $mol_drag extends $.$mol_drag {
      private dragged_task: HTMLElement | null = null;
      private initial_task_index: number | null = null;
      private draggedOverElem: HTMLElement | null = null;
      private dragImageElem: HTMLElement | null = null;
  
      @$mol_mem
      status(next = "ready" as "ready" | "drag") {
        return next;
      }
  
      drag_start(event: DragEvent | TouchEvent) {
        if (event instanceof TouchEvent) {
          this.handle_touch_start(event);
          return;
        }
  
        setTimeout(() => this.status("drag"));
  
        this.dragged_task = event.target as HTMLElement;
        this.initial_task_index = Array.from(
          this.dragged_task.parentElement!.children
        ).indexOf(this.dragged_task);
  
        const transfer = this.transfer();
        for (let type in transfer) {
          (event as DragEvent).dataTransfer!.setData(
            type,
            transfer[type as keyof typeof transfer]
          );
        }
  
        (event as DragEvent).dataTransfer!.setDragImage(this.image(), 0, -32);
  
        const effects = [] as string[];
        if (this.allow_copy()) effects.push("Copy");
        if (this.allow_link()) effects.push("Link");
        if (this.allow_move()) effects.push("Move");
  
        let effectAllowed = effects[0].toLowerCase() + effects.slice(1).join("");
        if (effectAllowed === "copyLinkMove") effectAllowed = "all";
        (event as DragEvent).dataTransfer!.effectAllowed =
          effectAllowed as DataTransfer["effectAllowed"];
  
        this.start(event as DragEvent);
      }
  
      drag_move(event: DragEvent | TouchEvent) {
        if (event instanceof TouchEvent) {
          this.handle_touch_move(event);
          return;
        }
  
        event.preventDefault();
  
        const draggedOverElem = document.elementFromPoint(
          event.clientX,
          event.clientY
        );
        if (
          draggedOverElem &&
          draggedOverElem !== this.dragged_task &&
          draggedOverElem.parentElement === this.dragged_task!.parentElement
        ) {
          const parent = this.dragged_task!.parentElement;
          const draggedOverIndex = Array.from(parent!.children).indexOf(
            draggedOverElem as HTMLElement
          );
  
          if (draggedOverIndex !== this.initial_task_index) {
            parent!.insertBefore(this.dragged_task!, draggedOverElem);
            this.initial_task_index = draggedOverIndex;
          }
        }
      }
  
      drag_end(event: DragEvent | TouchEvent) {
        if (event instanceof TouchEvent) {
          this.handle_touch_end(event);
          return;
        }
  
        setTimeout(() => this.status("ready"));
  
        this.dragged_task = null;
        this.initial_task_index = null;
  
        this.end(event as DragEvent);
      }
  
      handle_touch_start(event: TouchEvent) {
        event.preventDefault();
        this.status("drag");
  
        this.dragged_task = event.target as HTMLElement;
        this.initial_task_index = Array.from(
          this.dragged_task!.parentElement!.children
        ).indexOf(this.dragged_task);
  
        this.dragImageElem = this.dragged_task.cloneNode(true) as HTMLElement;
  
        this.dragImageElem.style.position = "absolute";
        this.dragImageElem.style.pointerEvents = "none"; 
        this.dragImageElem.style.zIndex = "9999";
		this.dragImageElem.style.color = "var(--mol_theme_focus)";
  
        document.body.appendChild(this.dragImageElem);
  
        const touch = event.touches[0];
        this.moveDragImage(touch.clientX, touch.clientY);
  
        this.start(event);
      }
  
      handle_touch_move(event: TouchEvent) {
        event.preventDefault();
  
        const touch = event.touches[0];
        const draggedOverElem = document.elementFromPoint(
          touch.clientX,
          touch.clientY
        );
  
        if (this.dragImageElem) {
          this.moveDragImage(touch.clientX, touch.clientY);
        }
  
        this.draggedOverElem = draggedOverElem as HTMLElement;
  
        if (
          draggedOverElem &&
          draggedOverElem !== this.dragged_task &&
          draggedOverElem.parentElement === this.dragged_task!.parentElement
        ) {
          const parent = this.dragged_task!.parentElement;
          const draggedOverIndex = Array.from(parent!.children).indexOf(
            draggedOverElem as HTMLElement
          );
  
          if (draggedOverIndex !== this.initial_task_index) {
            parent!.insertBefore(this.dragged_task!, draggedOverElem);
            this.initial_task_index = draggedOverIndex;
          }
        }
      }
  
      handle_touch_end(event: TouchEvent) {
        if (this.draggedOverElem) {
          if (
            this.draggedOverElem.id ==
            "$hyoo_mol.Root(0).Demos().Widget('$mol_drag_demo').Trash()"
          ) {
            this.dragged_task?.remove();
          }
        }
  
        if (this.dragImageElem) {
          this.dragImageElem.remove();
          this.dragImageElem = null;
        }
  
        this.draggedOverElem = null;
        this.dragged_task = null;
        this.initial_task_index = null;
        this.status("ready");
        this.end(event);
      }
  
      moveDragImage(x: number, y: number) {
        if (this.dragImageElem) {
          this.dragImageElem.style.left = `${x + 50}px`;
          this.dragImageElem.style.top = `${y + 50}px`;
        }
      }
    }
  }
  