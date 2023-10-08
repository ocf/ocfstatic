from pathlib import Path

from transpire.resources import Deployment, Ingress, Service
from transpire.types import Image
from transpire.utils import get_image_tag

name = "ocfstatic"


def objects():
    dep = Deployment(
        name="ocfstatic",
        image=get_image_tag("ocfstatic"),
        ports=[80],
    )

    svc = Service(
        name="ocfstatic",
        selector=dep.get_selector(),
        port_on_pod=80,
        port_on_svc=80,
    )

    ing = Ingress.from_svc(
        svc=svc,
        host="new.ocf.berkeley.edu",
        path_prefix="/",
    )

    yield dep.build()
    yield svc.build()
    yield ing.build()


def images():
    yield Image(name="ocfstatic", path=Path("/"))
